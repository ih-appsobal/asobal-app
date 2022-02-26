import React from "react";
import PropTypes from "prop-types";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import Logo from '../../../assets/img/logo.png'
import './PostRow.css'


function PostRow() {
  return (
    <div className="PostRow" style={{ display: "inline-block" }}>
      <Card>
        <div className="card-content">
          <div className="card-img" style={{ backgroundImage: `url(${Logo})`}}>
          </div>
          <CardContent>
            <Typography sx={{ mb: '0.15rem' }} color="textSecondary">
              Titulo del post
            </Typography>
            <small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </small>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

export default PostRow;
