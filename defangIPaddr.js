const defangIPaddr = address => address.split('.').join("[.]");;

defangIPaddr("1.1.1.1"); //"1[.]1[.]1[.]1"