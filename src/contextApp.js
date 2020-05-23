import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeContext, themes} from './theme-context';
//import ThemedButton from './themed_button';
import ThemeTogglerButton from './theme-toggler-button';

/*function Toolbar(props) {
    return(
        <ThemedButton onClick = {props.changeTheme}>
            Change Theme
        </ThemedButton>
    );
}*/

class AppContext extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme : themes.light,
            toggleTheme : this.toggleTheme,
        };

        this.toggleTheme = () => {
            this.setState(state => ({
                theme : state.theme === themes.dark 
                ? themes.light 
                : themes.dark,
            }));
        };
    }
    render() {
        return(
            /*<div>
                <ThemeContext.Provider value = {this.state.theme} >
                    <Toolbar changeTheme = {this.toggleTheme} />
                </ThemeContext.Provider>

                <section>
                    <ThemedButton />
                </section>
            </div>*/
            //passed the entire state to it
            <ThemeContext.Provider value = {this.state}>
                <Content />
            </ThemeContext.Provider>
        );
    }
}

function Content() {
    return(
        <div>
            <ThemeTogglerButton />
        </div>
    );
}


ReactDOM.render(
    <AppContext />, document.getElementById('root')
);