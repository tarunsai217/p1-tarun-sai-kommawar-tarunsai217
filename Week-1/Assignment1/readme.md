The primary function of a browser is to present us with the web resource we choose,
by requesting it from the appropriate server and displaying in browser window.

This is what broadly happens

1}User enters a URL in web browser 
2}Browser looks up for the IP adress of the domain name via DNS 
3}Browser sends a http/https request to that IP adress
4}Server sends back a http/https response
5}Browser starts rendering the HTML
6}Browser sends additional request like requesting for images,stylesheet, js scripts etc.


Rendering in detail-----

The rendering engine is responsible for rendering page.
First it starts parsing html doc and converts html elemenmts into DOM nodes and a tree is constructed known as content tree/DOM tree
Next a CCSOM tree is contructed from css.
Then all the external and internal styles are applied to form a render tree(DOM and CCSOM combined to form render tree)
After tree construction the layout process begins where each node is assigned exact cordinateson web page.
Final stage is painting where render tree will be traversed and each node will be painted using UI backend layer.

Network protocol -----
A TCP connection is established between the user computer and the server with 3 way handshake.

1} The client machine sends a SYN packet to the server over the internet, asking if it is open for new connections.
2}If the server has open ports that can accept and initiate new connections, it’ll respond with an ACKnowledgment of the SYN packet using a SYN/ACK packet.
3}The client will receive the SYN/ACK packet from the server and will acknowledge it by sending an ACK packet.

And TCP connection is established.


Sequence in which browser checks for the IP adress-----
1}Looks through the browser cache(Browsers maintain Ip adresses for fixed duration for websites previously visited)

2}Second, browser looks through the OS cache

3}Third, checks the router cache

4}Finally checks through ISP cache which includes cache of DNS records
