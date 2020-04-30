import React from "react";

export default class ApiCall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      webcam: null,
    };
  }

  async componentDidMount() {
    const url =
      "https://api.windy.com/api/webcams/v2/list/webcam=1583783403,1179853135,1384974006,1249044918,1473374057,1171033401,1284198909,1512053133,1206745451,1549489452?show=webcams:image,location,player&key=QuYS1wjNqXNc6LqfDlvVDbSvFGBM7uId";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ webcam: data.result.webcams[0], loading: false });
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.webcam ? (
          <div>...Je me lance !!!</div>
        ) : (
          <div>
            <div>{this.state.webcam.title}</div>
            <div>{this.state.webcam.location.country}</div>
            <img src={this.state.webcam.image.current.preview} alt={this.state.webcam.title} />
          </div>
        )}
      </div>
    );
  }
}
