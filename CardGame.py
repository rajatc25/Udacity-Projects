import random
def generate_cards_per_type(card_type):
    list1=[]
    num=""
    for i in range(2,11):
        num=card_type+str(i)
        list1.append(num)
    
    list1.append((card_type+"J"))
    list1.append((card_type+"Q"))
    list1.append((card_type+"K"))
    list1.append((card_type+"A"))
    return list1 
                 
def generate_card_deck():
    
    deck=[] 
    deck+=(generate_cards_per_type("C"))
    deck+=(generate_cards_per_type("D"))
    deck+=(generate_cards_per_type("H"))
    deck+=(generate_cards_per_type("S"))
    return deck
    
    
    
    

def shuffle_card_deck(cards_list):
    temp=""
    
    for j in range(0,27):
        a=random.randrange(0,26)
        b=random.randrange(27,51)
        temp=cards_list[a]
        cards_list[a]=cards_list[b]
        cards_list[b]=temp 
        
    return cards_list
        
def allocate_cards_to_players(card_list):
    player1=[] 
    player2=[] 
    player3=[] 
    player4=[] 
    dict={}
    
    for k in range(0,len(card_list),4):
        player1.append(card_list[k])
        player2.append(card_list[k+1])
        player3.append(card_list[k+2])
        player4.append(card_list[k+3])
    
    dict.update({"player1":player1})
    dict.update({"player2":player2})
    dict.update({"player3":player3})
    dict.update({"player4":player4})
    
    return dict
    

def sort_cards_of_each_player(cards_list):
    list1=[] 
    list2=[]
    list3=[]
    list4=[]
    list_total=[] 
    l1=[]
    l2=[]
    l3=[]
    l4=[]
    l1= generate_cards_per_type("C")
    l2= generate_cards_per_type("D")
    l3= generate_cards_per_type("H")
    l4= generate_cards_per_type("S")
    num=""
    for b in cards_list:
        num=b
        if(num[0]=="C"):
            list1.append(b)
        elif(num[0]=="D"):
            list2.append(b)
        elif(num[0]=="H"):
            list3.append(b)
        elif(num[0]=="S"):
            list4.append(b)
    
    for i in l1:
        if i not in list1:
            l1.pop(l1.index(i))
    for j in l2:
        if j not in list2:
            l2.pop(l2.index(j))
    for k in l3:
        if k not in list3:
            l3.pop(l3.index(k))
    for q in l4:
        if q not in list4:
            l4.pop(l4.index(q)) 
    
    
    for c in l1:
        list_total.append(c)
    
    for d in l2:
        list_total.append(d)
    
    for e in l3:
        list_total.append(e)
    
    for f in l4:
        list_total.append(f)

    return list_total
    
def prepare_cards():
    deck=[] 
    deck1=[]
    dict1={}
    list1=[]
    deck=generate_card_deck()
    deck1=shuffle_card_deck(deck)
    dict1=allocate_cards_to_players(deck1)

    for key,value in dict1.items():
        starting_player=""
        if "CA" in value:
            starting_player=key
            return key

first_player=prepare_cards()
print("The first player is:",first_player)