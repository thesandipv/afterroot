import Document, { Head, Html, Main, NextScript } from "next/document"

class NextDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx)
  }

  render() {
    return (
      <Html lang="en" dir="ltr" className="dark">
        <Head />
        {/*<SEO title={"AfterROOT"} />*/}
        <body className="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default NextDocument
