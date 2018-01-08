#DSA-Tryout
import random
def generate_cards_per_type(card_type):
    i=2
    li=[]
    while(i!=11):
        li.append(card_type+str(i))
        i+=1
    li.append(card_type+"J")
    li.append(card_type+"Q")
    li.append(card_type+"K")
    li.append(card_type+"A")
    return li
        
        

def generate_card_deck():
    li=[]
    li+=(generate_cards_per_type("C"))
    li+=(generate_cards_per_type("D"))
    li+=(generate_cards_per_type("H"))
    li+=(generate_cards_per_type("S"))
    return li

def shuffle_card_deck(cards_list):
    i=0
    while(i<52):
        a=random.randrange(0,26)
        b=random.randrange(27,51)
        t=cards_list[a]
        cards_list[a]=cards_list[b]
        cards_list[b]=t
        i+=1
    return cards_list
    

def sort_cards_of_each_player(card_list):
    l1=[]
    l2=[]
    l3=[]
    l4=[]
    for i in range(len(card_list)):
        if(card_list[i].startswith("C")):
            l1.append(card_list[i])
        if(card_list[i].startswith("D")):
            l2.append(card_list[i])
        if(card_list[i].startswith("H")):
            l3.append(card_list[i])
        if(card_list[i].startswith("S")):
            l4.append(card_list[i])
    lf=[]           
    for i in l1:
        if i.endswith("A") or i.endswith("J") or i.endswith("Q") or i.endswith("K") or i.endswith("10"):
            lf.append(i)
    l1=list(set(l1)-set(lf))
    l1=sorted(l1)
    lf=sorted(lf)
    if "CA" in lf:
        lf.remove("CA")
        lf.append("CA")
    l1+=lf
    
    lf=[]           
    for i in l2:
        if i.endswith("A") or i.endswith("J") or i.endswith("Q") or i.endswith("K") or i.endswith("10"):
            lf.append(i)
    l2=list(set(l2)-set(lf))
    l2=sorted(l2)
    lf=sorted(lf)
    if "DA" in lf:
        lf.remove("DA")
        lf.append("DA")
    l2+=lf
            
    lf=[]           
    for i in l3:
        if i.endswith("A") or i.endswith("J") or i.endswith("Q") or i.endswith("K") or i.endswith("10"):
            lf.append(i)
    l3=list(set(l3)-set(lf))
    l3=sorted(l3)
    lf=sorted(lf)
    if "HA" in lf:
        lf.remove("HA")
        lf.append("HA")
    l3+=lf
    
    lf=[]           
    for i in l4:
        if i.endswith("A") or i.endswith("J") or i.endswith("Q") or i.endswith("K") or i.endswith("10"):
            lf.append(i)
    l4=list(set(l4)-set(lf))
    l4=sorted(l4)
    lf=sorted(lf)
    if "SA" in lf:
        lf.remove("SA")
        lf.append("SA")
    l4+=lf
    card_list=[]
    card_list+=l1+l2+l3+l4
    return card_list
def allocate_cards_to_players(cards_list):
    l1=[]
    l2=[]
    l3=[]
    l4=[]
    for i in range(0,52,4):
        l1.append(cards_list[i])
        l2.append(cards_list[i+1])
        l3.append(cards_list[i+2])
        l4.append(cards_list[i+3])
    dict1={}
    dict1.update({"player1":l1,"player2":l2,"player3":l3,"player4":l4})
    
    return dict1
def prepare_cards():
    d={}
    cards_list=generate_card_deck()
    shuffle_card_deck(cards_list)
    d=allocate_cards_to_players(cards_list)
    sort_cards_of_each_player(d["player1"])
    sort_cards_of_each_player(d["player2"])
    sort_cards_of_each_player(d["player3"])
    sort_cards_of_each_player(d["player4"])
    if "CA" in d["player1"]:
        return "Player1"
    elif "CA" in d["player2"]:
        return "Player2"
    elif "CA" in d["player3"]:
        return "Player3"
    else:
        return "Player4"

first_player=prepare_cards()
print("The first player is:",first_player)