import React from 'react'
import App from 'next/app'
import Link from 'next/link';

class MyApp extends App {
    // Only uncomment this method if you have blocking data requirements for
    // every single page in your application. This disables the ability to
    // perform automatic static optimization, causing every page in your app to
    // be server-side rendered.
    //
    // static async getInitialProps(appContext) {
    //   // calls page's `getInitialProps` and fills `appProps.pageProps`
    //   const appProps = await App.getInitialProps(appContext);
    //
    //   return { ...appProps }
    // }

    render() {
        const { Component, pageProps } = this.props
        return (
            <div className="container">
                <h1>CRUD App with NextJs</h1>

                <div className="flex-row">
                    <Link href="/users">
                        <a>List Users</a>
                    </Link>
                    <Link href="/users/add">
                        <a>Add User</a>
                    </Link>
                </div>

                <div className="flex-row">
                    <div className="flex-large">
                        <Component {...pageProps} />
                    </div>
                </div>
            </div>
        )
    }
}

export default MyApp