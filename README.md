# JSMonitor
the input log monitoring interface with JavaScript  
https://github.com/YujiSODE/JSMonitor

>Copyright (c) 2016 Yuji SODE \<yuji.sode@gmail.com\>  
>This software is released under the MIT License.  
>See LICENSE.txt or http://opensource.org/licenses/mit-license.php
______

##Script
* JSMonitor.js

##How to use
* call `_JSMonitor(color)` with color='R,G,B,alpha' and every value is between 0 and 255.
* `_JSMonitor(color)` creates interface for data log, and retuns a function to be used as a data input.
* the available data format for the function returned by `_JSMonitor(color)` is as follows:  
`['sc@tag@v'(, ..., 'sc@tag@v')]`  
where `sc`, `tag`, and `v` are scale, tag (e.g., timestamp), and given numerical value, respectively. the given value is shown as "v\*sc" in graph

####_Interface_
* __"":__ the target ~.

##Example with JavaScript
`/*red graph*/`  
`var Y=_JSMonitor('255,0,0,255');`  
`for(var i=0;i<100;i+=1){`  
`    Y(['1@'+i+'test@'+100*Math.random()]);`  
`}`  
`/*green graph*/`  
`var Y=_JSMonitor('0,255,0,255');`  
`for(var i=0;i<100;i+=1){`  
`    Y(['0.5@'+i+'test@'+100*Math.random()]);`  
`}`  
`/*blue graph*/`  
`var Y=_JSMonitor('0,0,255,255');`  
`for(var i=0;i<10;i+=1){`  
`    Y(['1@arrayTest@0','1@arrayTest@50','1@arrayTest@80','1@arrayTest@110','1@arrayTest@140','1@arrayTest@170']);`  
`}`  
