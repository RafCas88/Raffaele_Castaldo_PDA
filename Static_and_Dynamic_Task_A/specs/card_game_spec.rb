require('minitest/autorun')
require('minitest/rg')
require_relative('../card')
require_relative('../card_game')

class CardGameTest < Minitest::Test

  def setup
    @card1 = Card.new('ace', 1)
    @card2 = Card.new('clubs', 2)
  end

  def test_check_for_Ace_returns_true
    assert_equal(true, CardGame.checkforAce(@card1))
  end

  def test_check_the_highest_card
    assert_equal(@card2, CardGame.highest_card(@card1, @card2))
  end

  def test_check_cards_total
    assert_equal("You have a total of 3", CardGame.cards_total([@card1, @card2]))
  end

end
