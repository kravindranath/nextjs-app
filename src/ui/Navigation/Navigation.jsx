function Navigation(){

    return(
        <header>
            <div className="nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/?section=shared">Most Shared</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Navigation;