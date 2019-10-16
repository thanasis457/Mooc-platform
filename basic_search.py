import mooc
def search():
    ut=mooc.Coursera()
    course=ut.courses()
    for i in range(len(course)):
        if(course[i].title=="Machine Learning"):
            return course[i]
    return -1
print(search()._dict())
