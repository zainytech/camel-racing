import logo from './logo.svg';
import './App.css';
import Home from './Comp/Home'
import Particles from "react-particles-js";
// import ParticleField from "./particle-field";

function App() {
  const styles = {
    root: {
      // fontFamily: "sans-serif",
      // textAlign: "center",
      height: "100%",
      width:'100%',
      background: "transparent",
      zIndex:'1',
      color:'red',
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
      position:'absolute',
      left:'0',
      top:'0',
      backgroundPosition: '50% 50%',
      
    }

};
  return (
    <div className="App">
{/* <div style={styles.root} class="particles-js">
    <Particles
    params={{
            particles: {
              number: {
                value: 100,
                density: {
                  enable: true,
                  value_area: 1500,
                }
              },
              color: {
                      value: "#ffffff"
                    },
            },

          }}
          
    />
</div> */}

      <Home/>
    </div>
  );
}

export default App;
