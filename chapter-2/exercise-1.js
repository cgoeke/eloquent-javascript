/*
Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
####### 
*/

for (let row = '#'; row.length <= 7; row += '#') {
  console.log(row);
}