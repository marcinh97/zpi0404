import {Nav, Navbar} from "react-bootstrap";
import Map from "./MapManager";
import React, {Component} from "react";
import './App.css'
import Popup from "reactjs-popup";
const votingAbi = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "integer",
                "type": "uint256"
            }
        ],
        "name": "intToStr",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "Offer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "userId",
                "type": "uint256"
            }
        ],
        "name": "voteForUser",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userId",
                "type": "uint256"
            }
        ],
        "name": "getPointsOfUser",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "rankingItems",
        "outputs": [
            {
                "name": "userId",
                "type": "uint256"
            },
            {
                "name": "votesNumber",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getWholeRanking",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]
class SuperlikeRanking extends Component {

    state={
        VotingContract: "",
        blockchainAdded: false,
        rankingString: ""
    };

    constructor(props){
        super(props);
        if (typeof window.web3 === 'undefined'){
            return;
            //console.log("Estoy aqui")
            //this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
        }
        this.renderRanking = this.renderRanking.bind(this)
        this.state.blockchainAdded = true;
        this.getFirstThree = this.getFirstThree.bind(this)


    }

    componentDidMount(){
        this.renderRanking();
    }

    renderRanking(){
        if (typeof window.web3 === 'undefined'){
            this.setState({rankingString: ""})
            return;
            //console.log("Estoy aqui")
            //this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
        }
        const VotingContract = window.web3.eth.contract(votingAbi)
        this.state.VotingContract = VotingContract.at("0x804728922813cc3488bc7b30ae43c83affc54bfa");
        this.state.rankingString = this.state.VotingContract.getWholeRanking((err, result) => {
            this.setState({
                rankingString: result
            })
            // return (<p>result</p>);
        })
        // return this.state.rankingString;
    }

    render() {
        if (typeof window.web3 === 'undefined') {
            return(
                <div className="LoginButton">
                    <head>
                        <meta charSet="utf-8"/>
                        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                        <meta name="description" content=""/>
                        <meta name="author" content=""/>
                        <title>Shop Homepage - Start Bootstrap Template</title>
                        <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
                        <link href="css/shop-homepage.css" rel="stylesheet"/>

                    </head>

                    <body className="back">

                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="/">CharytatywniRazem.pl</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto"></Nav>
                            <Nav className="mr-auto"></Nav>
                            <Nav><div id="map_button"></div></Nav>
                            <Nav><div id="all_offer_button"></div></Nav>
                            <Nav><div id="offer_button"></div></Nav>
                            <Nav><div id="my_offer_button"></div></Nav>
                            <Nav>
                                <div id="log_in_out"></div>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <section className="home_gallery_area p_120" id={"specificGalleryBackground"}>
                        <div className="container">
                            <div className="main_title">
                                <h2>Ranking użytkowników</h2>
                            </div>
                        </div>
                        <div className="isotope_fillter">
                        </div>
                        <div id={"biggerContainerRanking"}>
                            <div id={"rankingInfoButtonContainer"}>
                                <Popup trigger={<button className={"rankingInfoButton"}>Jak obliczamy ranking?</button>} position="right center" modal
                                       closeOnDocumentClick>
                                    <h4>Ranking obliczany jest na podstawie liczby super polubień (SuperLike), ktore
                                     dany darczyńca otrzymał od innych użytkownikow</h4>
                                </Popup>
                            </div>
                            <div className="container" id={"backgroundContainer"}>
                                <div id={"titleRanking"}>
                                    <h2 id={"mainRanking"}>Ranking ogólny:</h2>
                                </div>
                                {
                                    this.state.blockchainAdded ?
                                        <p>{this.renderBasedOnRanking(this.state.rankingString)}</p>
                                        :
                                        <div style={{textAlign: "center"}}>
                                            <h2 style={{margin: "20px"}}>Blockchain nie podlaczony!
                                            </h2>
                                            <img id={"blockchainMissingImg"}
                                                src={require("./views/noconnectionIcon.png")}
                                            />
                                            <br />
                                            <button className={"rankingInfoButton"}>Co to oznacza?</button>
                                        </div>
                                }

                            </div>
                        </div>


                    </section>
                    <footer className="bg-light py-5My">
                        <div className="container">
                            <div className="small text-center text-muted">Copyright &copy; 2019 - Horak & Łyko & Rychter & Sinicki
                            </div>
                        </div>
                    </footer>
                    <script src="vendor/jquery/jquery.min.js"></script>
                    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

                    </body>
                </div>
            )
        }
        return (
            <div className="LoginButton">


                <head>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <meta name="description" content=""/>
                    <meta name="author" content=""/>
                    <title>Shop Homepage - Start Bootstrap Template</title>
                    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
                    <link href="css/shop-homepage.css" rel="stylesheet"/>

                </head>

                <body className="back">

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">CharytatywniRazem.pl</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Nav className="mr-auto"></Nav>
                        <Nav><div id="map_button"></div></Nav>
                        <Nav><div id="all_offer_button"></div></Nav>
                        <Nav><div id="offer_button"></div></Nav>
                        <Nav><div id="my_offer_button"></div></Nav>
                        <Nav>
                            <div id="log_in_out"></div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <section className="home_gallery_area p_120" id={"specificGalleryBackground"}>
                    <div className="container">
                        <div className="main_title">
                            <h2>Ranking użytkowników</h2>
                        </div>
                    </div>
                    <div className="isotope_fillter">
                    </div>
                    <div id={"biggerContainerRanking"}>
                        <div id={"rankingInfoButtonContainer"}>
                            <Popup trigger={<button className={"rankingInfoButton"}>Jak obliczamy ranking?</button>} position="right center" modal
                                   closeOnDocumentClick>
                                <h4>Ranking obliczany jest na podstawie liczby super polubień (SuperLike), ktore
                                    dany darczyńca otrzymał od innych użytkownikow</h4>
                            </Popup>
                        </div>
                        <div className="container" id={"backgroundContainer"}>
                        <div id={"titleRanking"}>
                            <h2 id={"mainRanking"}>Ranking ogólny:</h2>
                        </div>
                            {
                                this.state.blockchainAdded ?
                                    this.getFirstThree(this.state.rankingString)
                                    :
                                    <div>
                                        <p>adsasdasdasd</p>
                                        <p>adsasdasdasd</p>
                                        <p>adsasdasdasd</p>
                                        <p>adsasdasdasd</p>
                                        <p>adsasdasdasd</p>
                                        <p>adsasdasdasd</p>
                                        <p>adsasdasdasd</p>
                                        <p>adsasdasdasd</p>
                                        <p>adsasdasdasd</p>
                                    </div>
                            }

                    </div>
                    </div>


                </section>
                <footer className="bg-light py-5My">
                    <div className="container">
                        <div className="small text-center text-muted">Copyright &copy; 2019 - Horak & Łyko & Rychter & Sinicki
                        </div>
                    </div>
                </footer>
                <script src="vendor/jquery/jquery.min.js"></script>
                <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

                </body>
            </div>

        );
    }

    getFirstThree(result){
        var dict = result.split(" ")
        var arr = []
        for (var i=1; i<dict.length-1; i+=2){
            //arr.push(dict[i] + "###" + dict[i+1])
            arr.push({
                key: parseInt(dict[i].replace("id:", "")),
                value: parseInt(dict[i+1].replace("points:", ""))
            })
        }
        // console.log(dict)
        // var res = document.createElement("div");
        // for (var i=0; i<dict.length; i++){
        //     var element = dict[i]
        //     var child = document.createTextNode("Huuu");
        //     res.appendChild(child)
        // }
        var result = Object.keys(arr).sort(function(a, b) {
            console.log("A1: " + arr[a].value + " k: " + arr[a].key)
            console.log("A2: " + arr[b].value)
            return arr[b].value - arr[a].value;
        })

        result = result.map((k) => parseInt(k))

        var finalArray = []

        for (var i=0; i<result.length; i++){
            console.log("curr: k=" + result[i] + " v:" + arr[result[i]].value)
            finalArray.push({
                key: arr[result[i]].key,
                value: arr[result[i]].value
            })
        }

        finalArray.forEach(v => console.log(v.key + " : " + v.value))
        // var returnArr = []
        // var max = finalArray.length < 3 ? finalArray.length : 3;
        // for (var i=0; i<max; i++){
        //     returnArr.push([finalArray[i].key, finalArray[i].value])
        // }
        //console.log("Retttt " + returnArr)
        console.log("Arr: " + finalArray)
        var first = Object.keys(finalArray)[0];
        var second = Object.keys(finalArray)[1];
        var third = Object.keys(finalArray)[2];

        console.log("F: " + first + ", s: " + second + ", t:" + third)


        return (
            <div>
                <div className="promos">
                    <div className="promo">
                        <div className="deal">
                            <span>2. miejsce</span>
                            <span>final</span>
                        </div>
                        <span className="price">$79</span>
                        <ul className="features">
                            <li>Some great feature</li>
                            <li>Another super feature</li>
                            <li>And more...</li>
                        </ul>
                        <button>Sign up</button>
                    </div>
                    <div className="promo scale">
                        <div className="deal">
                            <span>1. miejsce</span>
                        </div>
                        <span className="price">$89</span>
                        <ul className="features">
                            <li>Some great feature</li>
                            <li>Another super feature</li>
                            <li>And more...</li>
                        </ul>
                        <button>Sign up</button>
                    </div>
                    <div className="promo">
                        <div className="deal">
                            <span>3. miejsce</span>
                        </div>
                        <span className="price">$69</span>
                        <ul className="features">
                            <li>Choose the one on the left</li>
                            <li>We need moneyy</li>
                            <li>And more...</li>
                        </ul>
                        <button>Sign up</button>
                    </div>
                </div>
                <br />
                <p>{this.renderBasedOnRanking(this.state.rankingString)}</p>
            </div>
        );
    }

    renderBasedOnRanking(result) {
        var dict = result.split(" ")
        var arr = []
        for (var i=1; i<dict.length-1; i+=2){
            //arr.push(dict[i] + "###" + dict[i+1])
            arr.push({
                key: parseInt(dict[i].replace("id:", "")),
                value: parseInt(dict[i+1].replace("points:", ""))
            })
        }
       // console.log(dict)
        // var res = document.createElement("div");
        // for (var i=0; i<dict.length; i++){
        //     var element = dict[i]
        //     var child = document.createTextNode("Huuu");
        //     res.appendChild(child)
        // }
        var result = Object.keys(arr).sort(function(a, b) {
            console.log("A1: " + arr[a].value + " k: " + arr[a].key)
            console.log("A2: " + arr[b].value)
            return arr[b].value - arr[a].value;
        })

        result = result.map((k) => parseInt(k))

        var finalArray = []

        for (var i=0; i<result.length; i++){
            console.log("curr: k=" + result[i] + " v:" + arr[result[i]].value)
            finalArray.push({
                key: arr[result[i]].key,
                value: arr[result[i]].value
            })
        }

        finalArray.forEach(v => console.log(v.key + " : " + v.value))

        // items.sort(function(first, second) {
        //     console.log("F:  " + first)
        //     console.log("kurwa: " + (parseInt(second[1]) - parseInt(first[1])));
        //     return parseInt(second[1]) - parseInt(first[1]);
        // });
        // console.log(items)

        var pos = 1;

        return <div>
            <table className={"rwd-table"}>
                <thead>
                    <th id={"positionTab"}>Pozycja</th>
                    <th>User</th>
                    <th>Liczba superlajków</th>
                </thead>
                <tbody>
                {finalArray.map(val => <tr> <td>post: {pos++}</td> <td>AA:{val.key}</td>
                    <td>BB:{val.value}</td></tr>)}
                </tbody>
            </table>
            {/*{arr.map(this.renderPosition)}*/}
        </div>

    }

    renderPosition = (element) => {
        element = element.replace("id:", "")
        element = element.replace("points:", "")
        console.log(element)
        var arr = element.split("###");
        return <p>id??? {arr[0]} points??? {arr[1]}</p>
    }
}
export default SuperlikeRanking;