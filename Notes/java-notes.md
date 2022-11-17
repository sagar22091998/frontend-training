### Start ####
**ALT + ENTER ftw**
0... => octal , 0x... => hexa (i.e. int a = 0xF [this is x = 15])

## BigDecimal ##
float and double not accurate so..

BigDecimal num1 = new BigDecimal("34.5678923") // always use string
BigDecimal num2 = new BigDecimal("34.2344")

num1.add(num2) // will return new BigDecimal

BigDecimal are immutable (i.e ek baar hi assign kar sakte hai value)

to add int into BigDeci
int i = 5;	
num1.add(new BigDecimal(i))

XOR => ^'
**Diff btw "&&" and "&" is that if pehli condition is false aage ki chalegi bhi nahi in case of "&&" but aage waali condtion run hogi in case of "&"**
char a => a++ , --a chalta hai


## Reference Types##

normal vari stored in stack
object values are stored in heap // Ye or next line milake = reference type
object vari name stored in stack

ex
Animal dog = new Animal(23)
**Here "dog" is stored in stack the value "Animal(23)" in heap , value of dog will be the memory lcoation of "Animal(23)" hence dog is reference type.**
**default value of reference type == null**
reference is similar to ptr
dog == cat // checking same ref location hai kya in dono ka

String str = "Test" //this is fine because
.length, .chatAt, .substring(index,index), .indexOf(substr), .lastIndexOf, .contains, .endsWith , .empty, .equals, .equalsIgnoreCase, .toUpperCase, .toLowerCase, .trim,
.concat, .join(char,str1,str2) // joins str with, .replace(char,char)

Strings are immutable
## StringBuffer
StringBuffer sb = new StringBuffer("Test") // If no issues with multithreading use StringBuilder
.append(), 
.setCharAt(index) //can change value of buffer

##Wrapper Classes##
Wrapper Classes => Byte , Integer , Short , Long , Character , Float, Double // These have alot of utility methods

Using Wrapper
Integer s = new Integer(3);	OR	Integer s = Integer.valueOf(3); //both  also accepts strings 
Integer.valueOf() is better than new Integer() waala

Integer a = 55; // Auto boxing is done (which is behind the scenes valueOf() use hora hai) 
  
**Dates => LocalDate, LocalTime, LocalDateTime.**

int arr[] = {1,2,3}
for(arr : a){
	sout(a);
}

int arr[] = new int[size];
.length , Arrays.toString, Arrays.fill, Arrays.equals , Arrays.sort

Animal[] arr = new Animal[size];

**new BigDecimal(sum).divide(new BigDecimal(num),3,Rounding.UP); //BigDecimal .666666 chalne dega hence have to order it to be precise & round up** 

cant directly pass array params as {1,2,3} you need to do new int[] {1,2,3}

**Variable args funct(int... values) // values will be variable arg as an array**

## ArrayList

ArrayList<String> items = new ArrayList<String>();
.add , .remove(val or index)

**Collections Wrapper Class** // Similar to STL
.max,.min

**To Print object create a String toString() {} in your class**
String.format("Value of a- %d , Value of a- %f",c,d) => Could be used 

## OOPS Back ###

=> instanceof => to check that ki -> hai ki nahi ek particular object of a class. (ex dog1 instance of Dog)
=> Abstract class //iska object nahi banega , jo bhi extend karega abstract class ka sab implement karna padega 
public abstract class Baap {
abstract void shit();
}
=> Abstract class can have data mem and funcs like normal class.

## Interfaces ## 
public interface Baap {
    public void shit();
}

public class Beta implements Baap{
    @Override
    	public void shit() {
    }
}
=> Interfaces mein bhi inheritance chaleg
=> Default methods which allow the interfaces to have methods with implementation without affecting the classes that implement the interface.
=> Abstract class can partially implement interfaces.
=> A class can implement multiple interfaces

## Collections ## (4) List , Set , Queue , Map
=> **The List.of() static factory methods provide a convenient way to create immutable lists.**
=> **private ArrayList<Integer> number = new ArrayList<Integer>();**
=> number.add() , number.size() , number.get(index) , number.set(positionIndex,item) , number.remove(positionIndex) ,number.contains(item), number.indexOf(item), number.add(index,item),
number.remove(item)

=> **number.addAll(anotherNumberArrayList) OR private ArrayList<Integer> number = new ArrayList<Integer>(anotherNumberArrayList)**;
=> number.addAll(anotherNumberArrayList) could append after list as well or in particular postion by index passing.
**Collections Wrapper Class** // Similar to STL
.max,.min

**To Print object create a String toString() {} in your class**
String.format("Value of a- %d , Value of a- %f",c,d) => Could be used 

**97 habits progrs**
**Teach yourself programming in 10 years**
## List ## => ArrayList | LinkedList | Vector
=> List<String> words = List.of("Apple","Bat");
words.size(),words.isEmpty(),words.get(index),words.contains(item),words.indexOf(item)

=> Method returns -1 :- not available item
=> ArrayList vs LinkedList 
	LinkedList faster insertion/deletion 
	ArrayList faster access

=> Vector vs ArrayList
	Vectors are threadSafe / ArrayList are not :- vector provides synchronisaztion 
	
=> Looping through collections -> ArrayList<String> items = new ArrayList<String>();
	for(int i = 0 ; i< itelms.size();i++)
		Sout(get(i);
		
	for(String i: items)
		Sout(i);
		
	Iterator itemsIterator = items.iterator(); 
	while(itemsIterator.hasNext()){
		Sout(itemsIterator.next();
	}
	
=> Removal/Modifications during enhanced for loop is an issue.Better use iterator
        Iterator i = items.iterator();
        while (i.hasNext()) {
            if(i.next().endsWith("at")){
                i.remove();
            }
        }

=> Autoboxing refers to the conversion of a primitive value into an object of the corresponding wrapper class is called autoboxing.Unboxing on the other hand refers to converting an object of a wrapper type to its corresponding primitive value. For example conversion of Integer to int.

        //Autoboxing
        Integer i = new Integer(10);
 
        // Unboxing the Object
        int i1 = i;
 
        // Autoboxing of character
        Character gfg = 'a';
 
        // Auto-unboxing of Character
        char ch = gfg;

=> items.indexOf(para) // para == object waala method hai
=> items.indexOf(para) // para == object ya int waala method hai
	So to remove an element 101 from items you need to write items.remove(Integer.valueOf(101);
	
**Wrapper Classes**
Wrapper Classes => Byte , Integer , Short , Long , Character , Float, Double // These have alot of utility methods

Using Wrapper
Integer s = new Integer(3);	OR	Integer s = Integer.valueOf(3); //both  also accepts strings 
Integer.valueOf() is better than new Integer() waala

Integer a = 55; // Auto boxing is done (which is behind the scenes valueOf() use hora hai) 
	
Hamesha List<T> = new ArrayList<T> / LinkedList<T> / Vector<T>;

=> For Sorting purposes :- Collections.sort(itemList);

=>  To sort user defined(Car)type in

	public class AscendingOrder implements Comparator<Car> {
	    @Override
	    public int compare(Car first,Car second){
		return Integer.compare(first.getSpeed(), second.getSpeed()); // Ascending Order
	    }
	} 
	then
	
   	Collections.sort(itemList, new AscendingOrder());
    		   Or
   	itemList.sort(new AscendingOrder());

## OPTIONAL ##
        String[] words = new String[10];
        words[5] = "5%%";
        Optional<String> checkNull = Optional.ofNullable(words[5]);
        System.out.println(checkNull.equals(Optional.empty()));
        
=>      Optional.get(),Optional.isPresent(),
	orElse(10) // nahi hai kuch then return 10

## SET ## => HashSet | LinkedHashSet
=> Unique Things only.
=> No positional Access.

=> Set<String> set = Set.of(1,2,4)
=> Set<Integer> newSet = new HashSet<>(set);	// Random order.
=> Set<Integer> newSet = new LinkedHashSet<>(set); // Maintains the **insertion** order.
=> Set<Integer> newSet = new TreeSet<>(set); // Maintains the **sorted** order.
=> newSet.add()

=> TreeSet<Integer> sorted = new TreeSet<>(items); // To access methods like (see next line)
	.floor(x) // x not inclusive , .lower(x), upper(x), subSet(x,y) // x inclusive
	.subSet(x,boolInclusiveOrNot,y,boolInclusiveOrNot)
	.headSet(x) . tailSet(x) //head set mein after x ka set , tailSet before x ka set
	
## QUEUE ##

=> Queue<String> queue = new PriorityQueue(); 
=> //isko sout karoge to internal order alag dikhayega par when you pop order will be sorted dont worry.

=> .poll() //pop, .offer(item) //push ,.addAll() // add multi elements
=> Custom Comparator for priority.

	class AscendingOrder implements Comparator<String> {
	    @Override
	    public int compare(String first,String second){
		return Integer.compare(first.length(), second.length()); // Ascending Order
	    }
	}

        Queue<String> queue = new PriorityQueue(new AscendingOrder());

For String => toCharArray, split

## MAP ## HashMap | HashTable | LinkedHashMap | TreeMap
=> Not part of collection interface.
=> HashMap :- Unsorted and unordered allow to store key with null value
=> HashTable :- Unsorted and unordered , Thread Safe , Doest allow to store key with null value
=> LinkedHashMap :- Insetion order maintained not sorted , slower insert/delete , faster iteration
=> Treemap :- Sorted order
=> Map<String,Integer> m = Map.of("A",1,"B",12);
   Map<String,Integer> map = new HashMap<>(m);
=> map.get(key), map.size(), map.containsKey(key), map.containsValue(val), map.keySet(), map.values()
=> TreeMap will be in sorted order of keys.
=> TreeMap<String,Integer> map = new TreeMap<>(); 
   .higherKey(key) , .lowerKey(key) , .ceilingKey(key) , .floorKey(key), .firstEntry() , .lastEntry() , .subMap(key,key) , .subMap(key,includedBool,key,includedBool)	


####### GENERICS ########
	
public class Car<T> {
    private ArrayList<T> items = new ArrayList<>(); // **To include only number <T extends Number>** 

    public void addItem(T item){
        items.add(item);
    }

    public T getItem(int position){
        return items.get(position);
    }
}

=> We could use generics in methods as well.	 
	static <X> X function(X value){	// **To include only number <X extends Number>**
		return value;
	}	

**Wildcard**	
=> List<? extends Number> //Koi bhi list (ArrayList, LinkedList, Vector) jiske andar Number extends karne waala Object ho.
=> List<?> {List of anything}	
=>     static double sumOfNumberList(List<? extends Number> list){
        double sum = 0.0;
        for (Number num :list){
            sum+= num.doubleValue();
        }
        return sum;
    } //extends => Upper Bounded Wildcard

=>     static void sumOfNumberList(List<? super Number> list){
        list.add(5);
        list.add(5.0);
        list.add(5l);
        list.add(1.0f);
    }	//extends => Lower Bounded Wildcard //Add different values types
	
	
### FUNCTIONAL PROGRAMMING ### //Function as first class citizen
	
=> Print all elements using FP :- list.stream().forEach(x->System.out.println(x));
=> Filter even numbers Print all elements using FP :- list.stream().filter(x->x%2).forEach(System.out::println);
=> Filter even numbers Print all elements using FP :- list.stream().filter(x->x%2).forEach(System.out::println);
=> Sum all elements inside list => int sum =  list.stream().reduce(startingVal,(num1,num2)->num1+num2);	
=> In FP **we avoid mutation of variable** , focus on what to do.
=> (x->System.out.println(x)) // Lambda Expression(Method Defination in shortcur form)
=> stream() => Source of objects. We could do intermediate operation or termial operation.

=> Intermediate Operation -> filter() // After these you get returned another stream
=> Treminal Operation -> forEach(), reduce() //After these entire stream is return back or a consumed result.

**Intermediate Operation** //filter()
=> Printing sorted list :- list.stream().sorted().forEach(System.out::println);
=> Printing distinct list :- list.stream().distinct().forEach(System.out::println);	
=> Printing list jisme har element + 2 :- list.stream().map(e->e+2).forEach(System.out::println);	
=> IntStream.range(1,10) // to genrate stream of first 10 numbers; 

**Terminal Operation** // reduce()
=> Getting max of list :- list.stream().max((n1,n2)->Integer.compare(n1,n2)); //Returns Optional
=> Getting min of list :- list.stream().min((n1,n2)->Integer.compare(n1,n2)); //Returns Optional
=> To convert and return list :- list.stream().map(e->e%2).collect(Collectors.toList());
=> Get First 9 square list :- list = IntStream.range(1,10).map(x->x*x).boxed().collect(Collectors.toList()); //**boxed() to convert into normal stream**
=> Lambda functions are implements by functionalInterface

**Method Reference**
=> System.out::println is equivalwnt to e-> System.out.println(e)
=> String::length is equivalwnt to s->s.length()

=> Example :- Integer max = List.of(23,45,67,34).stream().filter(n->n%2==0).max((n1,n2)->Integer.compare(n1,n2)).orElse(0);

		is equivalent to
    public static boolean isEven(Integer number){
	return number%2;
    }
	
    Integer max = List.of(23,45,67,34).stream().filter(RunningCLassName::isEven).max(Integer::compareTo).orElse(0);
    
    
## THREADS ##
=> Execute task parallelly to maximize CPU utilization.
=> Creating a thread 
	class Task1 extends Thread{
	    public void run(){
		for (int i = 101 ; i<= 199;i++) 
		    System.out.println(i+"")	
		System.out.println("\nTask1 Done");//TERMINATED STATE
	    }
	} 
    
	Task1 t1 = new Task1(); //NEW STATE
        t1.start();
    
    		OR
    	class Task2 implements Runnable{
	    public void run(){
		for (int i = 101 ; i<= 199;i++)
		    System.out.println(i+" ");
		System.out.println("\nTask2 Done"); //TERMINATED STATE
	    }
	}
    
       Task2 t1 = new Task2(); //NEW STATE
       Thread t2 = new Thread(t1);
       t2.start();
    
    //RUNNING STATE => While task is executing
    //RUNNABLE STATE => While task is waiting for chance to get executed
    //BLOCKED STATE => Waiting for DB execution/Resources Execution
    	
=> Giving Priority to threads
	Task1 t1 = new Task1();
	t.setPriority(x) x == [1,10]
	
=> Communication Between Threads
	t1.join() to stop code below untill a particular thread is finished.

=> BLocking thread / Make thread wait
	Thread.sleep(x) //x in millisec
	Thread.yield() // Request to withdraw from running state

=> If a **synchronized** method is used by 50 threads , but only 1 thread will be able to execute & other 49 will wait for its execution.	

=> More control over threads => executor service
 
	        ExecutorService executorService = Executors.newSingleThreadExecutor(); //Will run 1 thread at a time.
        	executorService.execute(new Task1()); //Until Task1 isnt completed Task2 nahi hoga 
        	executorService.execute(new Task2());
        	executorService.shutdown(); //Else chalt rahega prog
		//Other normal main class code which will be running
		
	To execute multiple threads.
	ExecutorService executorService = Executors.newFixedThreadPool(2); //2 is noOfThreads // Will run only 2 threads at a time


=> Return value from threads 

	class CallableTask implements Callable<String> {
	    private String name;

	    public CallableTask(String name) {
		this.name = name;
	    }

	    @Override
	    public String call() throws Exception {
		Thread.sleep(10000);
		return "Hello " + name;
	    }
	}

	public static void main(String[] args) throws ExecutionException, InterruptedException {
	        ExecutorService executorService = Executors.newFixedThreadPool(1);
	        Future<String> welcomeFuture = executorService.submit(new CallableTask("First Thread"));
	        String res = welcomeFuture.get();
    	}	

=> Waiting for multiple thread to finish execution

	List<CallableTask> tasks = List.of(new CallableTask("Thread1"),new CallableTask("Thread2"));
	List<Future<String>> welcomeFutureList = executorService.invokeALl(tasks); // Use invokeAny which will return the list whenever any of the thread is completed
	
## EXCEPTION HADNLING ## 2 keys -> Good Message To user , Enough Info For Debug

=>     private static void method1(){
        method2();
        System.out.println("1 Ended");    }

    	private static void method2() {
        	try {
        	    String s = null;
        	    s.length();
        	    System.out.println("2 Ended");
        	} catch (NullPointerException e){  //Multi catch blocks no issues , most specific matching catch block will be executed
	            e.printStackTrace();
	 	} catch (Exception e){ 		//Ye waala to rahene dena last mein like default exception
           		e.printStackTrace();
        	} finally {
        		//run hoga exception aaye chaye na aaye.
        	}
	    }

	    public static void main(String[] args) throws ExecutionException, InterruptedException {
		method1();
		System.out.println("Main Ended");
	    }
=> You can have a try with finally only.
	
=> Checked and Unchecked Exception
=> throws XYZException (matlab ye code throw kar sakta hai please handle karo);
=> Unchecked Exception :- All RuntimeExceptions & its sub class. //Dont need to handle that	.
=> Checked Exception :- Excepti All RuntimeExceptions & its sub classes. //Risky Exception calling method have to handle it or throw it.

=> Throwing Exception
	   //For Unchecked Exceptions
	    public void add(Amount that) { 
		if(!this.currency.equals(that.currency))
		    throw new RuntimeException("Currency Don't Match");
		this.amount += that.amount;
	    }
	    
	    //For Checked Exceptions
	    public void add(Amount that) throws Exception { 
		if(!this.currency.equals(that.currency))
		    throw new Exception("Currency Don't Match");
		this.amount += that.amount;
	    }
	    
=> Custom Exception
class YourException extends Exception {
	public YourException(String msg){
		super(msg);
	}	
}

=> Try with resources.
	try(Scanner sc = new Scanner(System.in)) { //If Error occurs this try with resources block will close the scanner auto matically.
            //Do something
        }
=> Baap exceptions neeche
=> catch(FirstException | SecondException ex) // Same block for 2 types of exception
=> 	Never hide exceptions(print trace or info), 
	Think about user & support team,
	Think about method
	Have global exception handling

## Files ##

=> Files.list(Paths.get(".")).forEach(System.out::println); //To list all files 
=> Files.walk(Paths.get("."),5).forEach(System.out::println); //To list all files with a depth of 5 
=> Files.walk(Paths.get(".")).filter().forEach(System.out::println); //To list all files with a depth of 5 
=> Files.walk(Paths.get("."),5).filter(path -> String.valueOf(path).contains(".java")).forEach(System.out::println); // Filter java files
					OR
=> Files.find(Paths.get("."),5,(path, basicFileAttributes) -> String.valueOf(path).contains(".java")).forEach(System.out::println);
=> To find directory or not
	Files.find(Paths.get("."),5,(path, basicFileAttributes) -> basicFileAttributes.isDirectory()).forEach(System.out::println);
	basicFileAttributes // has a lot of attributes like size,creationTime,lastAccesTime,lastModifiedTime

=> To Whole Read File 
	Path filePath = Paths.get("./resources/data.txt");
  	List<String> strings = Files.readAllLines(filePath);

=> To Read Line by line
       Path filePath = Paths.get("./resources/data.txt");
       Files.lines(filePath).forEach(System.out::println);

=> To Write to file.
	Path filePath = Paths.get("./resources/data.txt");
        List<String> list = List.of("Baba","Blacksheep");
        Files.write(filePath,list

## MORE ON CONCURENCY ##

=> Concurreny (OS waala) [Thread Safe => A method that can be executed multiple times]
=> synchronized laga do method ke aage => Only 1 thread will be executing that method at a time.
=> Sab synchronized kardo to performance issues (So we have to use locks)

	Lock lock1 = new ReentrantLock(); //Ab pura function synchronized nahi karna padega. 
	lock1.lock();
	//Code that is need to be thread safe
	lock1.unlock(); 
	// synchronized isnt needed anymore 
	
=> private AtomicInteger i = new AtomicInteger();
	i.incrementAndGet(); // This is Thread Safe

=> Concurrent Collections offer "Thread Safety" without "Significant Performance Impact" in "Specific Scenarios"
=> Ex
        Map<Character, LongAdder> occurances = new Hashtable<>();

        String str = "ABCD ABCD ABCD";
        for(char character : str.toCharArray()){
            LongAdder longAdder = occurances.get(character);
            if(longAdder == null){
                longAdder = new LongAdder();
            }
            longAdder.increment();
            occurances.put(character, longAdder);
        }

        System.out.println(occurances);
        
       Using Concurrent Collector Below is the result
	
	ConcurrentMap<Character, LongAdder> occurances = new ConcurrentHashMap<>();

         String str = "ABCD ABCD ABCD";
        for(char character : str.toCharArray()){
            occurances.computeIfAbsent(character,ch-> new LongAdder()).increment();
        }

        System.out.println(occurances);

=> CopyOnWriteArrayList<> // A Thread safe variant of ArrayList.

## JAVA Tips ###

=> Try to import specific class instead of .*
=> Static Imports (Importing out static methods/class)
   (1)	import static java.lang.System.out;
	
	out.println("MESSAGE");
   (2) import static java.util.Collections.*;
   
   	sort(new ArrayList<String>();
	
=> obj1.equals(obj1) //Object same hai kya (i.e. same location hai kya) , ye nahi ki uske andar values same hai kya

=> To make equals works for diff object but same values
@Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Amount amount1 = (Amount) o;
        return amount == amount1.amount;
    }

    @Override
    public int hashCode() {
        return Objects.hash(amount);
    }
    
    If Implementing equals)() method you should also implement hashCode() Method
    	- The hascode return shouldnt be different for diff objects & it should only change when id changes
    	
    @Override 
    public int hashCode(){
	    final int prime = 31;
	    int res = 1;
	    res - prime* res +id;
	    return res;
    }
    }
    
=> Access Modifiers
	In case of Classes
		public :- This class can be used from anywhere(between different packages).
		default :- Only present in same package.
	In Case of Methods
		private:- Only Inside same class ok , not OK in same pakages
		protected:- OK In same package or sub classes, not OK in different pakages
		public:-OK In same package and class , OK in different pakages
		default:-OK In same package and class , not OK in different pakages

=> final
	- final class can't be extended.
	- final method can't be overrided.
	- final variable and final args can't be modified. //recomended to use all the time 	(Immutable Programming)

=> static 
	- private static int count = 0; //Inside class all objects chare this vari.
	- static methods -> we could call like Class.method();
	- static method ke andar normal data members not allowed only static data members but normal 	methods mein static vari are allowd. 
	- public static final abc; // Class constants(i.e Integer.MIN_VALUE) 
	
=> Nested Classes

class NestedExample{
    class InnerClass{

    }

    static class StaticNestedClass {

    }
}

public class Main   {
    public static void main(String[] args) throws IOException {

        NestedExample.StaticNestedClass ns = new NestedExample.StaticNestedClass();
        
        // Need Outer class for non static inner class
        NestedExample nestedClassRunner = new NestedExample();
        NestedExample.InnerClass innerCLass = nestedClassRunner.new InnerClass();
    }
}

=> Anonymous Class // See inline hi class declare karo (class have no name)
	//Instead of doing this for sort
	public class AscendingOrder implements Comparator<Car> {
	    @Override
	    public int compare(Car first,Car second){
		return Integer.compare(first.getSpeed(), second.getSpeed()); // Ascending Order
	    }
	} 
	
	Collections.sort(listItems,new AscendingOrder());
	
	//Do this via anonymous class
	Collections.sort(listItems, new Comparator<Car> {
	    @Override
	    public int compare(Car first,Car second){
		return Integer.compare(first.getSpeed(), second.getSpeed()); // Ascending Order
	    }
	} )

=> ENUMS
	enum Season {
		WINTER, SPRING, SUMMER, FALL;
	}
	
	Season s1 = Season.WINTER;
	or 
	Season s1 = Season.valueOf("WINTER");
	s1.name() , s1.ordinal() // Order of this season 
	
	Season.values() //Returns Arrays of all vals

=> ENUMS with values

	enum Season {
		WINTER(1), SPRING(2), SUMMER(3), FALL(4);
		
		private int value;
		
		private Season(int value){
			this.value = value;
		}
		
		public int getValue(){
			return value;	
		}
	}
	
        Season s1 = Season.SUMMER;
        System.out.println(s1.getValue());
	
=> **psvm**
### New Java Features ### 11+	

=> Modularization
	
	
	
	
	
	
######################################## RESET ##############################################
**Basic**
=> Statement = combi of expressions and keywords.
=> Company name = xyz org => its package = org.xyz
=> Care for overlow and underflow.
=> 214542 === 214_542 // comma wagera lagana hi types cases ke liye
=> long = 10l , double = 10.25d , float = 10.25f
=> Unicode table.com
=> byte 8 , short 16 , int 32 , long 64 , float 32 double 64 ,char 16
=> **Interger.SIZE , Interger.MAX_VALUE, Interger.MIN_VALUE** //Wrapper Classes
=> Type casting mein bade type mein chota value no dikkat vice versa error (have to (type) cast)
=> Float ko int mein type cast karne pe truncation hoga
=> Assignment operation return type is the type of assigned value
=> System.out.println("This is" +
" another" +
" still more.")
=> return -1 indicates error or invalid things
**Diff Merge**
=> Defining Consts :- private static final String INVALID_VALUE_MESSAGE = "Invalid Value"; // INVALID_VALUE_MESSAGE is convention for consts
=> Switch case mein shuru mein bhi default ho sakta hai no dikkat 
=> Switch only on int , short , byte , string , char , enum.
=> String.format("%.2f",val) // For precision
=> Integer.parseInt // For String to Integer conversion.

### TAKING INPUT ###
int a;
Scanner sc = new Scanner(System.in);
a = sc.nextInt();
sc.nextLine(); // To consume to enter press

String st =  sc.nextLine();

**=> If Incorrect Input**
    boolean inHaiKiNahi = sc.hasNextInt();
    if(inHaiKiNahi)
	a = sc.nextInt();
           
=> sc.close(); //Close scanner after use
=> **\" \\ , \n , \t**
=> System.out.printf("5*2 = %d", 5*2).println() //similarly could use multiple %d's
=> **%d mein int hi daalna padega same for doubles %f as well**
=> **By default(if uninitialised) string = null , numbers sab = 0 , bool = false , char = '\u0000'**


### OOPS ####
=> class vari : data/state/fields
=> class funs : actions/behaviour/methods
=>this.classVari;
=>**this(5) // calling para waala ctor inside khali ctor** '
=> toLowerCase() to cover all cases.
=> super() , super(args) to call parent ctor;
=> super.method() to other parents method inside child.
=> Generate(Alt + Insert) are also available for overriding.
=> Always try to make sure conflicting method which are overriden are called like super. / this.
=> Class / Instance / Instance Vari = (data member) / Reference(Ptr)/ 
=> Overloading isnt an example of polymorphism / Overriding is an example of poly.
=> Overrding method can't have lower access modifier.
**=> Overriding mein Covarient type[diffrent return type] chalega ... see example**
public class Parent {
    public Parent shit(){
        return new Parent();
    }
}


public class Child extends Parent {
    @Override
    public Child shit(){
        return new Child();
    }
}

  **Static Methods**
=> **In static method / static block you cant use this. super.**
=> Cant override static methods.
=> Static se class ke name pe call
=> To call static method inside own class : .methodName() only
=> Agar koi Instance Vari/data member use nahi karre ek method it should be static.
=> static methods ke andar only static private data member can be used.	

=> Inheritance is a IS A relationship
=> Class ke andar class => HAS A relationship [Composition]
=> Multiple Inheritence not allowed (no 2 baaps)
=> Baap ke vari mein bache ka object is ok .. vice versa not happening.(First case helps in polymorphism)

### Collections ###

=> Hamesha Scanner bannane se accha -> **private static Scanner sc = new Scanner(System.in);**
=> **int[] newArray = Arrays.copyOf(array, array.length);** // to copy array , 2nd arg is for kitna length tak copy
=> Array is also instance of object not a primitive type 
=> Jo array pass karte ho **wo pass by value hai**
=> new int[]{1,2,3,4};
=> Arrays.toString(arr);
=> Inside class you can do this :-
 	private int[] number = new int[50]; 
   	private ArrayList<Integer> number = new ArrayList<Integer>(); // <> ke andar primitive types nahi aayega

=> **private ArrayList<Integer> number = new ArrayList<Integer>();**
=> **number.add() , number.size() , number.get(index) , number.set(positionIndex,item) , number.remove(positionIndex) ,number.contains(item), number.indexOf(item)**
=> **number.addAll(anotherNumberArrayList) OR private ArrayList<Integer> number = new ArrayList<Integer>(anotherNumberArrayList)**;

