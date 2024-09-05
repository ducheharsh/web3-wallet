"use client"
import {  motion } from "framer-motion"
import { generateMnemonic } from 'bip39';
import { useEffect, useState } from "react";
import localFont from 'next/font/local'
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/theme-toggle";
import { toast } from "sonner";
const myFont = localFont({ src: './mongraf.ttf' })

type path = {
  solana: "501",
  ethereum:"60"
}
interface Wallet{
  publicKey: string,
  privateKey: string,
  mnemonic: string,
  path: path
}

export default function Home() {
  const [mnemonic, setMnemonic] = useState<string[]>([])
  const [wallets, setWallets] = useState<Wallet[]>([])


  const mnemonicGenerate = () => {
    const mnemonic = generateMnemonic()
    const mnemonicArray = mnemonic.split(" ")
    setMnemonic(mnemonicArray)
    console.log(mnemonicArray)
  }

const generateWalletFromMnemonic = (mnemonic: string) => {
    const wallet ={
      
    }
}
  
  return (
    <div className="">
    <section className="max-w-7xl mx-auto flex flex-col gap-4 p-4 min-h-[92vh] ">
      <div className="border-b-2 dark:border-white   pb-4 flex justify-between">
      <div>
      <h2 className={`text-3xl  mt-5 ${myFont.className} font-extrabold`}>3Wallet</h2>
      <h4 className={`text-sm dark:text-slate-300 ${myFont.className} ml-10`}>~ A Multichain Wallet</h4>
      </div>
      <div className="mt-5 mr-8">
      <ModeToggle/>
      </div>
      </div>
      <div className="mt-10">
      <motion.div 
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.4,
        duration: 0.4,
        ease: "easeInOut",
      }}>
        <h2 className="tracking-tighter text-5xl md:text-6xl font-bold">Generate Wallet with 3Wallets now !</h2>
        <h3 className="text-primary/80 font-semibold text-lg md:text-2xl mt-1"> 3Wallet now supports Multichain wallets as follows</h3>
        <div className=" mt-8 flex flex-col md:flex-row gap-2 w-full  ">
        <Button size={"lg"} className="md:w-64 h-14 text-lg" variant={"default"}
        onClick={()=>{
          toast.success("Solana Wallet Generated")
        }}
        >🔮 Solana</Button>  
        <Button size={"lg"} className="md:w-64 h-14 text-lg" variant={"default"}>🪙 Ethereum</Button>  
        </div>
        </motion.div>

      </div>
    
    </section>
    <section className="h-screen">

    </section>
    </div>
  );
}
