import Head from 'next/head'
import { useState } from 'react'
import Web3 from 'web3'
import 'bulma/css/bulma.css'
import styles from '../styles/auction.module.css'
import vmContract from '../blockchain/auction'

















































































const Auction = () =>{

    let web3

    const[winningBid, setwinningBid] =useState('')
    const[currentTime, setcurrentTime] =useState('')
    const[highestBid, sethighestBid] =useState('')

    
    
    const connectWalletHandler = async () => {
        window.ethereum.request({method:"eth_requestAccounts"})
        web3 = new Web3(window.etherum)
    }

    
    
    
    
    
    
    
    
    
    
    const getWinner = async () => {
        const winningBid = vmContract.methods.getWinner().call()
        sethighestbid(winningBid)
    }
    const getTime = async () => {
        const currentTime = vmContract.methods.getTime().call();
        setcurrentTime(currentTime)
    }

    const getHighestBid = async () => {
        const highestBid = vmContract.methods.getHighestBid().call();
        sethighestbid(highestBid)
    }



    vmContract.methods.advanceTime().call()
    return (
        <div className ={styles.main}>
            <Head>
                <title>Auction Application</title>
                <meta name="description" content="Auction House Application" />
            </Head>
            <nav className ='navbar mt-5 mb-5'>
                <div className ="container">
                    <div className ="nav-bar-brand">
                        <h1>Auction  House Application</h1>
                    </div>  

                    <div className='navbar-end'>
                        <button onClick={connectWalletHandler} className='button is-primary'>Connect Wallet</button>
                    </div>
                </div>
            </nav>

            <div className ="container">
                <label for="fname">Auction Account</label>
                <input type="text" id="fname" name="fname"></input><br></br>
                <label for="lname">Auction Start</label>
                <input type="text" id="lname" name="lname"></input><br></br>
                <label for="fname">Auction End</label>
                <input type="text" id="fname" name="fname"></input><br></br>
                <label for="lname">Auction Minimum</label>
                <input type="text" id="lname" name="lname"></input><br></br>
                <input type="submit" value="Create Auction"></input>
            </div>

            <nav className = 'main'>
                <div className='navbar-end mtr-5'>
                            <button  className='button is-primary'>Advance time</button>
                        </div>
                <section>


                    <div className ="container mt-5">  
                        <h2>AUCTION CURRENT TIME: {0}</h2>
                    </div>     
                </section>

                
                <section>
                <div className ="container mt-5" >  
                        <h2>AUCTION WINNING BID: {0}</h2>
                    </div>     
                </section>

                <section>
                <div className ="container mt-5">  
                        <h2>AUCTION WINNING Address: {0}</h2>
                    </div>     
                </section>
            </nav>


        </div>
    )
}

export default Auction;