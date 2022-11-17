### APACHE CAMEL ###
=> Move things between endpoints(JMS/ActiveMQ to File System, HTTP client to JMS)
=> On its way moving btw endpoints it could do fileztering , routing, logging , transforming , enrich.Camel API has helping parameters
=> Domain-specific language (DSL) // Serves a specific purpose/
=> Apache Camel is an integration framework.
=> Camel framework is a routing engine //which sources to accept messages, and determine how to process and send those messages to other destinations.
=> Camel interacts with various systems using the same API regardless of the protocol or data type the systems are using.
=> Components in Camel provide specific implementations of the API that target different protocols and data types.
=> Ye Camel Nahi hai - An Enterprise Service Bus (ESB) is fundamentally an architecture. It is a set of rules and principles for integrating numerous applications together over a bus-like infrastructure.
=> ROUTING AND MEDIATION ENGINE - routing engine will selectively move a message around, based on the route’s configuration.
=> ENTERPRISE INTEGRATION PATTERNS (EIPS) - The enterprise integration patterns, or EIP s, are helpful not only because they provide a proven solution for a given problem, but also because they help define and communicate the problem itself.Camel is heavily based on EIP s
=> To implement EIPs Camel(DSL is used.)

=> Here are some examples of the DSL using different languages and staying functionally equivalent:
■ Java DSL
from("file:data/inbox").to("jms:queue:order");
■ Spring DSL
<route>
	<from uri="file:data/inbox"/>
	<to uri="jms:queue:order"/>
</route>

=> Camel provides an extensive library of more than 80 components.
=> PAYLOAD-AGNOSTIC ROUTER - Camel can route any kind of payload—you aren’t restricted to carrying XML payloads.
=> POJO MODEL - Beans (or POJO s) are considered first-class citizens in Camel, and Camel strives to let you use beans anywhere and anytime in your integration projects.
=> In order to configure endpoints directly in routes, Camel uses an easy and intuitive URI configuration.
=> The Camel components can accept data in most types and convert the data to a type they’re capable of using.
=> Camel was designed not to be a server or ESB but instead to be embedded in whatever platform you choose.
=> Maven Project Object Model ( POM ) XML file.

=> Listing 1.2
	public class FileCopierWithCamel {
		public static void main(String args[]) throws Exception {
			CamelContext context = new DefaultCamelContext();
			context.addRoutes(new RouteBuilder() {
				public void configure() {
					from("file:data/inbox?noop=true")
					.to("file:data/outbox");
				}
			});
			context.start();
			Thread.sleep(10000);
			context.stop();
		}
	}


	-Every Camel application uses a CamelContext that’s subsequently started and then stopped.
	
### Camel’s message model ###
=> Message —The fundamental entity containing the data being carried and routed in Camel
=> Exchange An exchange in Camel is the message’s container during routing.
=> Message
	-Messages have a body (a payload),headers, and optional attachments
	-Each message has a Unique String identifier.

**Message Contents**
=> HEADERS : Headers are values associated with the message, such as sender identifiers, hints about content encoding, authentication information, and so on. Headers are name-value pairs; the name a unique, case-insensitive string, and the value is of type java.lang.Object.This means that Camel imposes no constraints on the type of the headers.
=> ATTACHMENTS : A message can also have optional attachments, which are typically used for the web service and email components.
=> BODY : The body is of type java.lang.Object . That means that a message can store any kind of content.When the sender and receiver use different body formats, Camel provides a number of mechanisms to transform the data into an acceptable format, and in many cases the conversion happens automatically with type converters, behind the scenes.
=> FAULT FLAG : output and fault messages. They’re both valid responses to invoking an operation, but the latter indicates an unsuccessful outcome. In general, faults aren’t handled by the integration infrastructure. They’re part of the contract between the client and the server and are handled at the application level.

=> Exchange
	-An exchange also provides support for the various types of interactions between systems, also known as message exchange patterns ( MEP s). MEP s are used to differentiate between one-way and request-response messaging styles
	-The Camel exchange holds a pattern property that can be either
		-> InOnly —A one-way message For example, JMS messaging.
		-> InOut —A request-response message. For example, HTTP -based transports.
**Exchange Contents**
=> Exchange ID —A unique ID that identifies the exchange.
=> MEP —A pattern that denotes whether you’re using the InOnly or InOut messagiing style. When the pattern is InOnly , the exchange contains an in message. For InOut , an out message also exists that 	contains the reply message for the caller.
=> Exception—If an error occurs at any time during routing, an Exception will be set in the exception field. 
=> Properties—Similar to message headers, but they last for the duration of the entire exchange. Properties are used to contain global-level information, whereas message are specific to a particular message. Camel itself will add various properties to the exchange during routing. You, as a developer, can store and retrieve properties at any point during the lifetime of an exchange.
=> In message—This is the input message, which is mandatory. The in message contains the request message. 
=> Out message—This is an optional message that only exists if the MEP is InOut .The out message contains the reply message.

### Camel’s architecture ###
=> Camel logger helps in debugging.
=> Bean invokes methods
=> The routing engine uses routes as specifications for where messages are routed.Routes are defined using one of Camel’s domain-specific languages (DSL s).
=> Processors are used to transform and manipulate messages during routing and also to implement all the EIP patterns.
=> Components are the extension points in Camel for adding connectivity to other systems. To expose these systems to the rest of Camel, components provide an endpoint interface.

**Camel concepts**

=> CAMELCONTEXT - Camel’s runtime system
=> The services that the CamelContext provides (services that the CamelContext keeps together.)
	- Components -> Contains the components used.
	- Endpoints -> Contains the endpoints that have been created.
	- Routes -> Contains the routes that have been added.
	- Type Converters
	- Data formats
	- Registry -> (Contains a registry that allows you to look up beans)
	- Languages -> Contains the loaded languages.
	
=> ROUTING ENGINE - Camel’s routing engine is what actually moves messages under the hood. This engine isn’t exposed to the developer, but you should be aware that it’s there and that it does all the heavy lifting, ensuring that messages are routed properly.

=> ROUTES - Route is as a chain of processors.
=> By decoupling clients from servers, and producers from consumers, routes can
	- Decide dynamically what server a client will invoke
	- extra processing
	- Allow for clients and servers to be developed independently
	
=> Each route in Camel has a unique identifier. Routes also have exactly one input source for messages, so they’re effectively tied to an input endpoint.To define a route, a DSL is used.

=> DSL - In Camel, DSL means a fluent Java API that contains methods named for EIP terms.DSL's provide a nice abstraction
=> Below is call Spring DSL 
<route>
	<from uri="file:data/inbox"/>
	<filter>
		<xpath>/order[not(@test)]</xpath>
		<to uri="jms:queue:order"/>
	</filter>
</route>
// What Above code does define a route that consumes files from a file end-point. Messages are then routed to the filter EIP , which will use an XP ath predicate to test whether the message is a test order or not. If a message passes the test, it’s forwarded to the JMS endpoint. Messages failing the filter test will be dropped.

=> PROCESSOR - Represents a node capable of using, creating, or modifying an incoming exchange.Exchanges flow from one processor to another; as such, you can think of a route as a graph.

=> COMPONENT - Components are the main extension point in Camel.They’re associated with a name that’s used in a URI , and they act as a factory of endpoints.

=> ENDPOINTS - Camel abstraction that models the end of a channel through which a system can send or receive messages
=> In Camel, you configure endpoints using URIs, such as **file:data/inbox?delay=5000** , and you also refer to endpoints this way.
	- The Scheme['file'] denotes which Camel component handles that type of endpoint. // for a file - FileComponent will be used which will create a FileEndpoint
	- The ContextPath['data/inbox'] tells the FileComponent that the starting folder is data/inbox. The Option['delay=5000'] indicates that files should be polled at a 5 second interval.
=> An endpoint acts as a factory for creating consumers and producers that are capable of receiving and sending messages to a particular endpoint.

############ STACK OVER ####
**It's important to remember that an Endpoint, created by a Component (i.e. Endpoint Factory), can sit at either end of a Camel Route. If you put the Component at the start of a route then there must be an implementation of the Consumer part of the Component. This does the work of converting the specific input/request (like an HTTP request) into something generic - a Camel Exchange - that can travel down a Route. Whereas if you put the Component at end of a route then you must have an implementation of a Producer. The Producer does the work of taking the Exchange from the end of a route and converting it into something specific (like a JMS message).**
############ VID ###########
=> (.from) Receiving messeage and create Consumers wraps the payload and creates the exchange.Are of 2 types.
	- Event Driven -> These consumers reacts to events.AKA Async consumer. Ex - JMS, Kafka
	- Polling Consumers -> Sync consumers. Polls and reads the content from a source in regular intervals. Ex - FTP Directory.

=> Producer - Entity that creates and send message to an endpoint.Exchange is converted into appropriate type (Producer does this behind the scenees)
############################

=> PRODUCER - A producer is the Camel abstraction that refers to an entity capable of creating and sending a message to an endpoint.When a message needs to be sent to an
endpoint, the producer will create an exchange and populate it with data compatible with that particular endpoint.
=> For example, a FileProducer will write the message body to a file. A JmsProducer , on the other hand, will map the Camel message to a javax.jms.Message before sending it to a JMS destination. This is an important feature in Camel, because it hides the complexity of interacting with particular transports. All you need to do is route a message to an endpoint, and the producer does the heavy lifting.

=> CONSUMER - A consumer is the service that receives messages produced by a producer, wraps them in an exchange, and sends them to be processed. Consumers are the source of the exchanges being routed in Camel.

### ROUTING WITH CAMELS ###

=> In the context of enterprise messaging systems, routing is the process by which a message is taken from an input queue and, based on a set of conditions, sent to one of several output queues.	
