import scraper
import json
#Coursera part
# cc=scraper.Coursera().courses()
# print("Got Courses\n")
cnt=0
# for i in range(len(cc)):
#     cnt+=1
#     opened='/Users/thanasis/Desktop/mooc-platform/courses/course'+str(cnt)+'.json';
#     print("opened\n")
#     with open(opened,"w+") as write:
#         json.dump(cc[i]._dict(),write,indent=4)
# print("All Coursera courses parsed\n")

#Edx part
# cc=scraper.Edx().courses()
# print("Got Courses\n")
# for i in range(len(cc)):
#     cnt+=1
#     opened='/Users/thanasis/Desktop/mooc-platform/courses/course'+str(cnt)+'.json';
#     print("opened\n")
#     with open(opened,"w+") as write:
#         json.dump(cc[i]._dict(),write,indent=4)
# print("All Edx courses parsed\n")
#
# #FutureLearn part
# cc=scraper.FutureLearn().courses()
# print("Got Courses\n")
# for i in range(len(cc)):
#     cnt+=1
#     opened='/Users/thanasis/Desktop/mooc-platform/courses/course'+str(cnt)+'.json';
#     print("opened\n")
#     with open(opened,"w+") as write:
#         json.dump(cc[i]._dict(),write,indent=4)
# print("All FutureLearn courses parsed\n")
#
# #MitOCW part
# cc=scraper.MitOCW().courses()
# print("Got Courses\n")
# for i in range(len(cc)):
#     cnt+=1
#     opened='/Users/thanasis/Desktop/mooc-platform/courses/course'+str(cnt)+'.json';
#     print("opened\n")
#     with open(opened,"w+") as write:
#         json.dump(cc[i]._dict(),write,indent=4)
# print("All MitOCW courses parsed\n")
#
# #Udacity part
# cc=scraper.Coursera().courses()
# print("Got Courses\n")
# for i in range(len(cc)):
#     cnt+=1
#     opened='/Users/thanasis/Desktop/mooc-platform/courses/course'+str(cnt)+'.json';
#     print("opened\n")
#     with open(opened,"w+") as write:
#         json.dump(cc[i]._dict(),write,indent=4)
# print("All Udacity courses parsed\n")
# 
# opened='/Users/thanasis/Desktop/mooc-platform/courses/numofcourses.txt';
# with open(opened,"w+") as w:
#     w.write(str(cnt))
