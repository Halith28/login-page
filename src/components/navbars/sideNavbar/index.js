/**
 * @author Kameshwaran Murugan
 * @email kamesh@qdmplatforms.com
 * @create date 2021-01-25
 * @modify date 2021-01-29
 * @desc Side Navigation bar parent
 */

import React from 'react';
import { SideNavBar } from './sideNavbar';

class SideNavbarParent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return <SideNavBar {...this.props} />
    }
}

export default SideNavbarParent;