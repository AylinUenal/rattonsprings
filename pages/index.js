import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ratton Springs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="max-w-full bg-hero-home bg-cover h-xl bg-center flex items-center justify-center">
        <h1 className="text-white text-5xl">
          Welcome to Ratton Springs!!
        </h1>
      </section>

    <section className="flex items-center mt-9">
      <div className="flex-grow">
        <Accordion allowZeroExpanded>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                What is our mission?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in
                cupidatat occaecat ut occaecat consequat est minim minim
                esse tempor laborum consequat esse adipisicing eu
                reprehenderit enim.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                What is our promise?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                In ad velit in ex nostrud dolore cupidatat consectetur
                ea in ut nostrud velit in irure cillum tempor laboris
                sed adipisicing eu esse duis nulla non.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <img src="../images/hands-with-water.jpg" alt="water splashing on hands" className="h-xl"/>
      </div>
    </section>


      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </>
  )
}
