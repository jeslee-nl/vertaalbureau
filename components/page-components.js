function Title ({ children }) {
    return (<h1>{children}</h1>)
}

function SubTitle ({ children }) {
    return (<h2>{children}</h2>)
}

function CenterText ({ children }) {
    return (<div className='text-center'>{children}</div> )
}

function PageText ({ children }) {
    return (<div className='page-text'>{children}</div> )
}

function Emphasis ({ children }) {
    return (<div className='emphasis'>{children}</div> )
}

export {Title, SubTitle, PageText, Emphasis, CenterText};