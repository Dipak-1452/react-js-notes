function Com(){
    return(
        <div>
            <p>component1</p>
        </div>
    )
}

export default Com

export function Com2(){
    return(
        <div>
            <p>component2</p>
        </div>
    )
}

export function Com3(){
    return(
        <div>
            <p>component3</p>
        </div>
    )
}

export const name="dipak";

// we have to start component name in caps because reactjs 
// doesn't differentiate between component and html tag

// we should wrap a multiple element inside a div in component while returning

// The main difference between a library and a framework is that a library
// is a collection of functions that developers can use as needed, while a 
// framework dictates the flow of an application and requires developers to 
// follow its rules


// a module cannot have multiple default exports
// we can export constant, variable etc..
