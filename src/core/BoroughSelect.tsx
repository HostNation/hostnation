import React from 'react';

import { Div, Hover, Txt } from '../core/elements';
import styles, { colors } from '../core/styles';


interface SelectState {
    optionsState: string;
}

let openBoroughs = ["Hillingdon", "Harrow", "Barnet", "Enfield", "Redbridge", "Havering", "Barking", "Brent"]

export default class BoroughSelect extends React.Component<{}, SelectState> {
    constructor(props) {
        super(props);
        this.state = { optionsState: "" }
    }

    onChange = (event) => {
        this.setState({ optionsState: event.target.value })
    }


    render() {
        let isOpen = <div></div>

        if (openBoroughs.includes(this.state.optionsState)) {
            isOpen =
                <div>We are currently accepting applications in your borough. Sign up here:
                    <a
                        href="https://airtable.com/shrEs9XBHYuJxLEaP?prefill_Type=Befriender"
                        target="_blank"
                    >
                        {/* https://forms.gle/517pgsohaaTm4v4RA */}

                        <Hover
                            style={{
                                ...styles.boxText,
                                color: colors.yellow,
                                fontWeight: 'bold',
                                hover: { color: colors.yellowDark },
                            }}
                        >
                            {({ hoverProps, style }) => (
                                <Txt {...hoverProps} style={style}>
                                    London Registration Form &raquo;
                                </Txt>
                            )}
                        </Hover>
                    </a>
                </div>
        } else if (this.state.optionsState == "") {
            isOpen = <div></div>

        } else {
            isOpen = <div>We’re sorry but we are currently over-subscribed in this borough.
                <br></br>Many thanks for your interest and maybe you could consider a small, regular donation to support our work instead?

                <a
                    href="https://www.totalgiving.co.uk/donate/hostnation"
                    target="_blank"
                >
                    <Hover
                        style={{
                            ...styles.boxText,
                            color: colors.yellow,
                            fontWeight: 'bold',
                            hover: { color: colors.yellowDark },
                        }}
                    >
                        {({ hoverProps, style }) => (
                            <Txt {...hoverProps} style={style}>
                                Donate Here &raquo;
                            </Txt>
                        )}
                    </Hover>
                </a>

            </div>
        }


        return (
            <Div style={styles.boxText}>
                <select name="boroughs" id="boroughs" value={this.state.optionsState} onChange={this.onChange} >
                    <option value="" disabled selected>Enter your borough</option>
                    <option value="Barking">Barking and Dagenham</option>
                    <option value="Barnet">Barnet</option>
                    <option value="Bexley">Bexley</option>
                    <option value="Brent">Brent</option>
                    <option value="Bromley">Bromley</option>
                    <option value="Camden">Camden</option>
                    <option value="City">City of London</option>
                    <option value="Croydon">Croydon</option>
                    <option value="Ealing">Ealing</option>
                    <option value="Enfield">Enfield</option>
                    <option value="Greenwich">Greenwich</option>
                    <option value="Hackney">Hackney</option>
                    <option value="Hammersmith">Hammersmith</option>
                    <option value="Haringey">Haringey</option>
                    <option value="Harrow">Harrow</option>
                    <option value="Havering">Havering</option>
                    <option value="Hillingdon">Hillingdon</option>
                    <option value="Hounslow">Hounslow</option>
                    <option value="Islington">Islington</option>
                    <option value="Kensington">Kensington and Chelsea</option>
                    <option value="Kingston">Kingston</option>
                    <option value="Lambeth">Lambeth</option>
                    <option value="Lewisham">Lewisham</option>
                    <option value="Merton">Merton</option>
                    <option value="Newham">Newham</option>
                    <option value="Redbridge">Redbridge</option>
                    <option value="Richmond">Richmond</option>
                    <option value="Southwark">Southwark</option>
                    <option value="Sutton">Sutton</option>
                    <option value="Tower">Tower Hamlets</option>
                    <option value="Waltham">Waltham Forest</option>
                    <option value="Wandsworth">Wandsworth</option>
                    <option value="Westminster">Westminster</option>
                </select>
                {isOpen}
            </Div>
        )
    }
};