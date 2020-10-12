import * as React from 'react';
import {
  Route as RouteBase,
  withRouter as withRouterBase,
} from 'react-router-dom';
import GatsbyLink from 'gatsby-link';
import r, { branch } from 'refluent';
import { Div, Hover, Icon, Txt } from 'elmnt';
import { getData, restyle } from '../common-client';

const LocationContext = (React as any).createContext();
const BreadcrumbContext = (React as any).createContext();

export const withLocation = r
  .transform(withRouterBase)
  .yield(({ next, location }) => (
    <LocationContext.Provider value={location}>
      {next()}
    </LocationContext.Provider>
  )) as r;

export const getLocation = r.yield(({ next }) => (
  <LocationContext.Consumer>
    {location => next(p => ({ ...p, location }))}
  </LocationContext.Consumer>
));

export const withBreadcrumbs = base =>
  r
    .yield(getLocation)
    .do((props$, push) => {
      const labels = {};
      return {
        setBreadcrumb: (path, label) => {
          const { location } = props$();
          labels[path.slice(base.length + 1).replace(/\/$/, '')] = label;
          push({
            breadcrumbs: location.pathname
              .slice(base.length + 1)
              .replace(/\/$/, '')
              .split('/')
              .map((path, i, paths) => {
                const current = paths.slice(0, i + 1).join('/');
                return [`/${base}${current}`, labels[current] || path];
              }),
          });
        },
      };
    })
    .yield(({ setBreadcrumb, breadcrumbs, next }) => (
      <BreadcrumbContext.Provider value={setBreadcrumb}>
        {next(p => ({ ...p, breadcrumbs }))}
      </BreadcrumbContext.Provider>
    )) as r;

const RouteComponent = ({ component: Comp, render, data, location, props }) =>
  Comp ? (
    <Comp data={data} location={location} {...props} />
  ) : (
    render({ data, location, ...props })
  );

const Breadcrumb = r
  .yield(
    branch(
      ({ label }) => typeof label === 'function',
      r.do('label', 'match', (label, match) => ({
        label: label(match.params),
      })),
    ),
  )
  .yield(
    branch(
      ({ label }) => Array.isArray(label),
      r
        .do(getData(({ label }) => label[0]))
        .do('label', 'data', (label, data) => ({
          label: data ? label[1](data) : '...',
        })),
    ),
  )
  .yield(({ next }) => (
    <BreadcrumbContext.Consumer>
      {setBreadcrumb => next(props => ({ ...props, setBreadcrumb }))}
    </BreadcrumbContext.Consumer>
  ))
  .do('label', 'match', 'setBreadcrumb', (label, match, setBreadcrumb) => {
    setTimeout(() => setBreadcrumb(match.url, label));
  })
  .yield(({ path, loader, component, render, routeProps, data, location }) => (
    <RouteBase
      path={path}
      {...routeProps}
      render={props =>
        !loader || data ? (
          <RouteComponent
            component={component}
            render={render}
            data={data}
            location={location}
            props={props}
          />
        ) : (
          loader
        )
      }
    />
  ));

export const Route = ({
  path,
  label,
  loader,
  component,
  render,
  ...routeProps
}: any) => (
  <RouteBase
    path={path}
    render={({ match }) => (
      <Breadcrumb
        path={path}
        label={label}
        loader={loader}
        component={component}
        render={Object.assign(render, { noCache: true })}
        routeProps={routeProps}
        match={match}
      />
    )}
  />
);

export const Breadcrumbs = r
  .do(
    restyle(style => ({
      base: style,
      link: style.mergeKeys('link'),
      icon: style.scale({ fontSize: 0.9 }),
    })),
  )
  .yield(({ breadcrumbs = [], style }) => (
    <Div
      style={{
        layout: 'bar',
        spacing: 10,
        paddingRight: 200,
        minHeight: style.base.fontSize,
      }}
    >
      {breadcrumbs.map(([path, label], i) => (
        <Div style={{ layout: 'bar', spacing: 10 }} key={i}>
          {i !== 0 && (
            <Icon
              viewBox="0 0 8 16"
              path="M7.5 8l-5 5L1 11.5 4.75 8 1 4.5 2.5 3z"
              style={style.icon}
            />
          )}
          {i === breadcrumbs.length - 1 ? (
            <Txt style={style.base}>{label}</Txt>
          ) : (
            <GatsbyLink to={path}>
              <Hover style={style.link}>
                {({ hoverProps, style }) => (
                  <Txt {...hoverProps} style={style}>
                    {label}
                  </Txt>
                )}
              </Hover>
            </GatsbyLink>
          )}
        </Div>
      ))}
    </Div>
  ));

export const Link = ({ to, newTab, route: _, ...props }: any) => {
  const external = to.startsWith('http');
  return external ? (
    <a href={to} target="_blank" {...props} />
  ) : (
    <GatsbyLink to={to} {...(newTab ? { target: '_blank' } : {})} {...props} />
  );
};
