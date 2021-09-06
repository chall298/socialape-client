import React, { Component } from 'react';
import  withStyles  from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types'


// MUI Stuff
import Grid from '@material-ui/core/Grid'
const styles = {
    form: {
        textAlign: 'center'
    }
}

export class login extends Component {
    render() {
        const { classes } = this.props
        return (
            <Grid container className={classes.form}>
                <Grid item sm/>
                <Grid item sm>
                    <p>Yoooo</p>
                </Grid>
                <Grid item sm/>
            </Grid>
        )
    }
}

login.propTypes ={
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(login)
