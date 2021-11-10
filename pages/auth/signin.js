import { getProviders, signIn } from "next-auth/react";
import Head from 'next/head'
import Header from '../../components/Header'


function signin({ providers }) {
    return (
        <>
            <Head>
                <title>Instagram 2.0 Sign In</title>
                <link rel="icon" href="/icon.jpg" />
            </Head>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
                <img className="w-80"
                    src="https://links.papareact.com/ocw" alt="Instagram Image" />
                <p className="font-sm italic">
                    This app was built using NextJS and Tailwind CSS. This application
                    is for testing and development purposes only
                </p>
                <div className="mt-40">
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                        <button className="p-3 bg-blue-500 rounded-lg text-white" 
                                onClick={() => signIn(provider.id, {callbackUrl: "/"})}
                        >
                            Sign in with {provider.name}
                        </button>
                        </div>
                        ))} 
                </div>
            </div>
            
            
        </>
    )
}


// server side rendering
export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}

export default signin;
