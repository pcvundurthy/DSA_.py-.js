def Capitalise(paragraph):
    array=list(paragraph)
    for i in range(len(paragraph)):
        if(i==0 or array[i-1]=='.' or array[i-1]==' '):
            if(array[i]>='a' and array[i]<='z'):
                val=ord(array[i])-32
                array[i]=chr(val)
    sentence="".join(array)
    return sentence

paragraph="Srivrinda is cute devotee of Lord sree, krsna."
z=Capitalise(paragraph)
print(z)
        