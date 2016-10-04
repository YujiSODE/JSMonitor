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

##Example
`/*Red*/`
`var Y=_JSMonitor('255,0,0,255');`  
``
