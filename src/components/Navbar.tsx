export default function Navbar() {

    // this state is used for autocomplete.  
    return (
        <nav>
            <div className="h-24 w-full bg-gray-500 grid grid-cols-3 gap-4 content-start p-4">
                <div>
                    <img src="https://3.files.edl.io/255c/19/08/06/232654-5f3e38ef-673d-4738-9d87-6936eca6877e.jpg" className="w-12"/>
                </div>
                <div>
                    <h1 className="text-center">Trojan Trading Post</h1>
                </div>
                <div>
                    <div className="text-right"><a href="/">Sign In</a></div>
                </div>   
                
            </div>

          
        </nav>
      );
    };
