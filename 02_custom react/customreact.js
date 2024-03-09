const maincontainer = document.querySelector('#root');

const reactElement = {
    type:'a',
    props:{
        href:'www.google.com',
        target:'_blank',
    },
    children:'click me to visit google'
}


//! one way to render reactelement in container , first method.
customRender(reactElement, maincontainer);

// function customRender(reactElement, container){
//     const domElement = document.createElement(reactElement.type);
//     domElement.innerHTML = reactElement.children;
//     domElement.setAttribute('href',reactElement.props.href);
//     domElement.setAttribute('target',reactElement.props.target)
//     container.appendChild(domElement);
// }

//! another approach , Second Method. in above one we were doing set attribute for every property instead we can do this:-

function customRender(ReactElement, container){
    const domElement = document.createElement(ReactElement.type);
    domElement.innerHTML = ReactElement.children;
    for(const prop in ReactElement.props){
        if(prop == 'children') continue ; 
        domElement.setAttribute(prop,ReactElement.props[prop])
    }
    container.appendChild(domElement);
}