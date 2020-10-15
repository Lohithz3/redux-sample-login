import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            loggingIn: false,
            incorrect: false,
        };
      
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //set username and password state of entered in UI for comparison
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        this.setState({
         
            incorrect: false,
          
        });
    }

    //check whether the entered username and password matches with the redux login data(hruday@gmail.com and hruday123)
    handleSubmit(e) {
        if(this.state.username === this.props.remainders.username && this.state.password === this.props.remainders.password){
            this.setState({loggingIn: true});
        }
        else if(this.state.username !== this.props.remainders.username){
            this.setState({
                incorrect: true,
                loggingIn:false
            });
            e.preventDefault();
        }
        else if(this.state.password !== this.props.remainders.password){
            this.setState({
                incorrect: true,
                loggingIn:false
            });
            e.preventDefault();
        }
        else{
            this.setState({
          
            loggingIn:false
        });
        e.preventDefault();
        }
    }

    render() {
        const { username, password ,incorrect} = this.state;
        const loggingIn = this.state.loggingIn;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (incorrect ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        {!username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (incorrect ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {!password &&
                            <div className="help-block">Password is required</div>
                        }
                        {incorrect &&
                            <div className="help-block">Incorrect username / password!</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                        {loggingIn && (
                            <Redirect to={'/home'}/>
                        )}
                    </div>
                </form>
               
            </div>
        );
    }
}


//accessing login username and password from redux store
const matchStatetoProps = state => {
    return{
        remainders: state.remainders
    };
};

export default connect(matchStatetoProps)(LoginPage)