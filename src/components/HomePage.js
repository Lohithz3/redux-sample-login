import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           logout: false
        };
        this.clicklogout = this.clicklogout.bind(this);
    }

    // logout event
    clicklogout() {
        this.setState({
            logout: true,
        });
    }

    render() {
        const Styles =({
            table: {
                fontSize: '1.5rem',
            },
          });
          const logout = this.state.logout;
        return (
            
            <div className="col-md-6 col-md-offset-3">
                <h2>Employee list</h2>
                <div className="" style ={{float: 'right'}} >
                        <button className="btn btn-primary" onClick={this.clicklogout}>Logout</button>
                        {logout && (
                            <Redirect to={'/'}/>
                        )}
                </div>
                <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell style = {Styles.table}> Id</TableCell>
                        <TableCell style = {Styles.table} align="right">Name</TableCell>
                        <TableCell style = {Styles.table} align="right">Age</TableCell>
                        <TableCell style = {Styles.table} align="right">Gender</TableCell>
                        <TableCell style = {Styles.table} align="right">Email</TableCell>
                        <TableCell style = {Styles.table} align="right">PhoneNo</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.props.users.map((row) => (
                        <TableRow key={row.name}>
                        <TableCell style = {Styles.table} component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell style = {Styles.table} align="right">{row.id}</TableCell>
                        <TableCell style = {Styles.table} align="right">{row.age}</TableCell>
                        <TableCell style = {Styles.table} align="right">{row.gender}</TableCell>
                        <TableCell style = {Styles.table} align="right">{row.email}</TableCell>
                        <TableCell style = {Styles.table} align="right">{row.phoneNo}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </div>
        );
    }
}

//accessing employee list from redux store
const matchStatetoProps = state => {
    return{
        users: state.users
    };
};

export default connect(matchStatetoProps)(Home)