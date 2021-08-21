import React from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import { createMemoryHistory } from "history";
import { useRouter } from "next/router";

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <h2>Home</h2>,
    },
    {
        path: "/firstVerse",
        main: () => <h2>First verse</h2>,
    },
    {
        path: "/secondVerse",
        main: () => <h2>Second verse</h2>,
    },
];

let history = createMemoryHistory();

export default function SidebarExample() {
    const router2 = useRouter();

    const [state, setState] = React.useState("");
    const [ind, setInd] = React.useState(false);

    React.useEffect(() => {
        // console.log("hello");
        let pas = window.location.href;
        let hello = pas.split("/");
        let tri = hello[3];

        if (tri === "") {
            console.log("home");
        } else {
            let two = tri.split("?");
            let id = two[1];

            console.log("id =", id);
            //-----

            let arri = [];

            routes !== undefined &&
                routes.map((route) => arri.push(route.path));

            // console.log(arri);

            let indi = arri.indexOf(`/${id}`);
            debugger;
            setInd(indi);
            //----
            setState(id);
            // console.log("id =", tri);
        }

        let arr = [];

        debugger;

        routes !== undefined && routes.map((route) => arr.push(route.path));
        debugger;
        console.log(arr);
    }, []);

    // React.useEffect(() => {

    // }, [ind, state]);

    // if (state !== "" && ind) {
    //     debugger;

    //     let p = `/${state}`;
    //     let ch = routes[ind].main;

    //     debugger;

    //     // window.location.reload("http://localhost:3000/");

    //     return (
    //         <Router>
    //             <Route
    //                 // key={ind}
    //                 path={p}
    //                 // exact={routes[ind].exact}
    //                 render={(props) => routes[ind].main}
    //             />
    //         </Router>
    //     );
    // } else {

    return (
        <Router history={history}>
            <div style={{ display: "flex" }}>
                <div
                    style={{
                        padding: "10px",
                        width: "40%",
                        background: "#f0f0f0",
                    }}
                >
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        <li>
                            <Link
                                to="/"
                                onClick={() =>
                                    router2.push("/", undefined, {
                                        shallow: true,
                                    })
                                }
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/firstVerse"
                                onClick={() =>
                                    router2.push("/?firstVerse", undefined, {
                                        shallow: true,
                                    })
                                }
                            >
                                First verse
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/secondVerse"
                                onClick={() =>
                                    router2.push("/?secondVerse", undefined, {
                                        shallow: true,
                                    })
                                }
                            >
                                Second verse
                            </Link>
                        </li>
                    </ul>
                </div>

                <div style={{ flex: 1, padding: "10px" }}>
                    <Switch>
                        {/* if (state !== "" && ind) {
        let p = `/${state}`;
        let ch = routes[ind].main;

        return (
            <Router>
                <Route
                    // key={ind}
                    path={p}
                    // exact={routes[ind].exact}
                    render={(props) => routes[ind].main}
                />
            </Router>
        );
    } */}
                        {
                            // state !== "" && ind ? (
                            //     <Route
                            //         // key={ind}
                            //         path={`/${state}`}
                            //         // exact={routes[ind].exact}
                            //         render={(props) => routes[ind].main}
                            //     />
                            // ) : (
                            routes.map((route, index) => (
                                <Route
                                    key={index}
                                    // path={`/${state}` || route.path}
                                    path={`/${state}` || route.path}
                                    exact={route.exact}
                                    render={(props) =>
                                        ind ? routes[ind].main : <route.main />
                                    }
                                />
                            ))
                            // )
                        }
                    </Switch>
                </div>
            </div>
        </Router>
    );
}
// }
