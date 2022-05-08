import React from 'react';

const Blogs = () => {
    return (
        <div className="container mt-5">
            <h3>Difference between javascript and nodejs</h3>
            <p>JavaScript is a programming language. It is running in any web browser with a proper browser engine.Mainly using for any client-side activity for a web application, like possible attribute validation or refreshing the page in a specific interval or provide some dynamic changes in web pages without refreshing the page. <br /> Node js is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.It mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job.</p>
            <h3> Differences between sql and nosql databases.</h3>
            <p>There is some differences between sql and nosql. <br />
                <ol>
                    <li>SQL databases are relational, NoSQL databases are non-relational.</li>
                    <li>SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                    <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                    <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                    <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                </ol></p>
            
            <h3>What is the purpose of jwt and how does it work</h3>
            <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. <br />
                JWTs differ from other web tokens in that they contain a set of claims. Claims are used to
            transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
            </p>
            
        </div>
    );
};

export default Blogs;