// a component is just a function ehich return a jsx templete and that function is exported at bottom of the file
// sfc know as state less functional component
//boilerplate compenent

const Navbar  = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links"></div>
            <a href="/">Home</a>
            <a href="/create">New Blog</a>
        </nav>
     );
}
 
export default Navbar;