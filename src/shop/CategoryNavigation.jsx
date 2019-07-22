import * as React from "react";
import PropTypes from "prop-types";
import { ToggleLink } from "../ToggleLink";

export class CategoryNavigation extends React.Component {
    render = () => {
        return <React.Fragment>
            <ToggleLink to={this.props.baseUrl} exact={true}>All</ToggleLink>
            { this.props.categories && this.props.categories.map(c => 
                <ToggleLink key={c} to={`${this.props.baseUrl}/${c.toLowerCase()}`}>
                    {c}
                </ToggleLink>
            )}
        </React.Fragment>
    };
};

CategoryNavigation.propTypes = {
    baseUrl: PropTypes.string.isRequired,
    categories: PropTypes.array
};
