/**
 * @author Kameshwaran Murugan
 * @email kamesh@qdmplatforms.com
 * @create date 2021-01-25
 * @modify date 2021-01-25
 * @desc Top Navigation bar parent
 */

import React from 'react';
import { TopNavBar } from './topNavbar';

class TopNavbarParent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return <TopNavBar />
    }
}

export default TopNavbarParent;