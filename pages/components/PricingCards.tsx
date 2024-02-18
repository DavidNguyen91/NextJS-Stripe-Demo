export default function PricingCard () {
    return(
    <div className="border-gray-100 shadow-2xl border-4 text-center mt-10 max-w-[1040px]">
    <div>
     <div className="bg-gray-100 h-28 items-center font-bold">
        <h4 className="text-3xl">JavaScript Course 2024</h4>
        <p style = {{color:"#eb1e1e"}}>168 hours on-demand video <br/>89 coding exercises <br/>
        Certificate of completion

</p>
     </div>
     <div>
       <div className="flex flex-col items-center justify-center pt-4">
           <h1 className="text-5xl font-bold"> 
           {(999999 / 100).toLocaleString('en-US', {
             style: 'currency',
             currency: 'USD'
           })}
           </h1>
       </div>
       
       <a 
        href="https://buy.stripe.com/test_14k7vC6NB9mr8sUaEE"
       className="mt-8 flex w-full justify-center rounded-md border border-transparent bg-[#eb1e1e] py-2 px-4 text-sm font-medium text-white shadow-sm"     >
          Buy Now
       </a>
     </div>
    </div>
 </div>
 )
}


