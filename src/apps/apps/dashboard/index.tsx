import * as React from 'react';
import {
  branch,
  compose,
  mapProps,
  renderComponent,
  withHandlers,
  withProps,
} from 'recompose';
import { BrowserRouter, Route } from 'react-router-dom';
import { Div, Txt } from 'elmnt';
import keysToObject from 'keys-to-object';
import { Obj } from 'common';
import { getData, Spinner } from 'common-client';

import styles, { colors } from '../../styles';

import BreadCrumbs from './BreadCrumbs';
import rootConfig from './config';
import Section from './Section';
import wrapper from './wrapper';

export const toUrl = (value?: string) =>
  (value || '')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

export const createUrl = (parts: string[]) => '/' + parts.slice(1).join('/');

const PageInner = compose<any, any>(
  branch(
    ({ config }: any) => Array.isArray(config),
    compose(
      getData(({ config }) => config[0]),
      branch(
        ({ data }: any) => !data,
        renderComponent(({ path }: any) => (
          <Div style={{ spacing: 40 }}>
            <Div style={{ spacing: 15 }}>
              <BreadCrumbs path={[...path, { url: '', name: 'Loading...' }]} />
              <Txt style={{ ...styles.header, fontSize: 50 }} />
            </Div>
            <Spinner style={{ color: colors.purple }} />
          </Div>
        )),
      ),
      mapProps(({ config, data, ...props }: any) => ({
        config: config[1](data),
        ...props,
      })),
    ),
  ),
  withProps(({ config }) => ({
    ...config,
    sections: Array.isArray(config.sections)
      ? config.sections
      : [].concat(config.sections || []),
  })),
  withProps(({ path, url, name, sections }: any) => ({
    path: [...path, { url, name }],
    pages: keysToObject(
      sections
        .map(section => {
          if (section.type === 'links') {
            return typeof section.links[section.links.length - 1] === 'function'
              ? {
                  name: section.prefix || '',
                  prefix: section.prefix,
                  config: section.page,
                }
              : section.links.map(link => {
                  if (Array.isArray(link)) {
                    return {
                      name: link[1],
                      prefix: section.prefix,
                      config: section.page,
                    };
                  }
                  const { link: _, name, prefix, ...config } = link;
                  return { name, prefix, config };
                });
          } else if (section.type === 'tablelinks') {
            return {
              name: section.prefix || '',
              prefix: section.prefix,
              config: section.page,
            };
          }
        })
        .reduce((res, v) => res.concat(v || []), []),
      ({ name, prefix, config }) => ({ name, prefix, config }),
      ({ name }) => toUrl(name),
    ),
  })),
)(({ isExact, path, title, sections, pages }) => (
  <div>
    {isExact && (
      <Div style={{ spacing: 40 }}>
        <Div style={{ spacing: 15 }}>
          <BreadCrumbs path={path} />
          <Txt style={{ ...styles.header, fontSize: 50 }}>{title}</Txt>
        </Div>
        {sections.map((section, i) => (
          <Section path={path} {...section} key={i} />
        ))}
      </Div>
    )}
    {Object.keys(pages).length > 0 && <Page path={path} pages={pages} />}
  </div>
));

interface PageInfo {
  name?: string;
  title: string;
  sections?: any;
}
type PageConfig = PageInfo | [string, (data: any) => PageInfo];
interface PageProps {
  path: { url: string; name: string }[];
  pages: Obj<{
    name?: string;
    prefix?: string;
    config: PageConfig | ((name: string) => PageConfig);
  }>;
}
const Page = withHandlers<PageProps, any>({
  render: ({ path, pages }: PageProps) => ({ match }) => {
    const page =
      pages[match.params.page] ||
      pages[(match.params.page || '').split('-')[0]] ||
      pages[''];
    const url = match.params.page || '';
    const config =
      typeof page.config === 'function'
        ? page.config(
            page.prefix ? url.slice(page.prefix.length + 1) : page.name || url,
          )
        : page.config;
    return page ? (
      <PageInner
        isExact={match.isExact}
        path={path}
        url={url}
        name={page.name}
        config={config}
      />
    ) : null;
  },
})(({ path, render }: any) => (
  <Route path={createUrl([...path.map(p => p.url), ':page'])} render={render} />
));

export default wrapper(() => (
  <BrowserRouter basename="dashboard">
    <Page path={[]} pages={{ '': { config: rootConfig } }} />
  </BrowserRouter>
));

// import { withScriptjs } from 'react-google-maps';

// <Layout
//     googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCQ8P7-0kTGz2_tkcHjOo0IUiMB_z9Bbp4"
//     loadingElement={<div />}
//     {...props}
//   />
