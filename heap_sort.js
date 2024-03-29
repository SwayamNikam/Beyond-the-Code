/*
    *****************
    DONE BY:-   TUMMALA KETHAN
    
    *****************
*/

function Heap()
{
    c_delay=0;

    heap_sort();
    
    enable_buttons();
}

function swap(i,j)
{
    div_update(divs[i],div_sizes[i],"black");//Color update
    div_update(divs[j],div_sizes[j],"black");//Color update

    var temp=div_sizes[i];
    div_sizes[i]=div_sizes[j];
    div_sizes[j]=temp;

    div_update(divs[i],div_sizes[i],"black");//Height update
    div_update(divs[j],div_sizes[j],"black");//Height update

    div_update(divs[i],div_sizes[i],"rgb(102 116 204)");//Color update
    div_update(divs[j],div_sizes[j],"rgb(102 116 204)");//Color update
}

function max_heapify(n,i)
{
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && div_sizes[l]>div_sizes[largest])
    {
        if(largest!=i)
        {
            div_update(divs[largest],div_sizes[largest],"rgb(102 116 204)");//Color update
        }

        largest=l;

        div_update(divs[largest],div_sizes[largest],"black");//Color update
    }

    if(r<n && div_sizes[r]>div_sizes[largest])
    {
        if(largest!=i)
        {
            div_update(divs[largest],div_sizes[largest],"rgb(102 116 204)");//Color update
        }

        largest=r;

        div_update(divs[largest],div_sizes[largest],"black");//Color update
    }

    if(largest!=i)
    {
        swap(i,largest);

        max_heapify(n,largest);
    }
}

function heap_sort()
{
    for(var i=Math.floor(array_size/2)-1;i>=0;i--)
    {
        max_heapify(array_size,i);
    }

    for(var i=array_size-1;i>0;i--)
    {
        swap(0,i);
        div_update(divs[i],div_sizes[i],"green");//Color update
        div_update(divs[i],div_sizes[i],"rgb(74 79 92)");//Color update

        max_heapify(i,0);

        div_update(divs[i],div_sizes[i],"rgb(102 116 204)");//Color update
        div_update(divs[i],div_sizes[i],"green");//Color update
    }
    div_update(divs[i],div_sizes[i],"green");//Color update
}

/*
    *****************
    DONE BY:-   TUMMALA KETHAN
    
    *****************
*/