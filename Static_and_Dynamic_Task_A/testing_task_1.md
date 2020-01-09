### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
#missing require_relative('card')
class CardGame


  def checkforAce(card)#The name of the function should be in snake_case and should be a
    #self method as there is no initialize.
    if card.value = 1#it should be double equals rather than single.
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)  #there is a spelling error, it should be def
  #Also there is a missing comma between the parameters in the function.
  if card1.value > card2.value
    return card  #this should return card1.
  else
    return card2
  end
end
end#this is an extra end no needed.

def self.cards_total(cards)
  total#the total should start set to 0.
  for card in cards
    total += card.value
    return "You have a total of" + total#missing space at the end of the string and
    #total needs to be converted into a string in order to concatenate it. Also this line should be outside  the for loop
  end
end
#missing an extra end here.
```
