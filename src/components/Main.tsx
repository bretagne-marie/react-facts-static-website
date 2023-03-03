import React from 'react';
import Input from './Input'
import '../index.css'

function Main() {
    return (
        <main className="main">
        <h2 className="main__sub-title">Fun facts about React</h2>
        <section className="section__card">
          <ul>
            <li className="section__card-li">Was first released in 2013</li>
            <li className="section__card-li">Was originally created by Jordan Walke</li>
            <li className="section__card-li">Has more than 100K stars on Github</li>
            <li className="section__card-li">Is maintained by Facebook</li>
            <li className="section__card-li">Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
        </section>
        <Input />
      </main>
    )
}

export default Main;