import React, {Component} from 'react';
import './App.css'; // the ./ syntax is like saying check in the same directory as this folder
import tachyons from 'tachyons';
import Provider from './components/Provider';
import Navigation from './components/navigation/Navigation';
import Signin from './components/Signin/Signin';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ImageLink from './components/imagelink/ImageLink';
import Rank from './components/rank/Rank';
import Clarifai from 'clarifai';



const app = new Clarifai.App({
 apiKey: '2db5084dcb294bfe9f9b2450c27b3c75'
});

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input : '',
      imageUrl: '',
      box: {},
      route: 'signin'

    };
  }
calculateFaceLocation = (data) => {
const clarifyFace = data.outputs[0].data.regions[0].region_info.bounding_box;
const image = document.getElementById('inputImage');
const width = Number(image.width);
const height = Number(image.height);
console.log(clarifyFace);
return {

    leftCol: clarifyFace.left_col*width,
    topRow: clarifyFace.top_row*height,
    rightCol: width-(clarifyFace.right_col*width),
    bottomRow: height-(clarifyFace.bottom_row*height)

}

}

displayFaceBox = (box) =>{
  console.log('the box0 ', box);
  this.setState({box: box});
}
onInputChange = (event) => {
  this.setState({input: event.target.value});

}
onRouteChange = (route) => {
  console.log('clicked on onRouteChange');
  this.setState({route: route});
}
onButtonSubmit = () => {
  this.setState({imageUrl: this.state.input})
  app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
  .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
  .catch(err => console.log(err));

}
render () {
  return (
    <div>
    <Navigation onRouteChange= {this.onRouteChange}/>
    {this.state.route === 'signin'
    ? <Signin onRouteChange= {this.onRouteChange}/>
    : <div>
        <Rank/>
        <ImageLink onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
      </div>
    }

    </div>
  );

}


}

export default App;
