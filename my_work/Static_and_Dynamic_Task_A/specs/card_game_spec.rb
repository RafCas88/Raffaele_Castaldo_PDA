require('minitest/autorun')
require('minitest/rg')
require_relative('../card.rb')
require_relative('../card_game.rb')

class TestCardGame < Minitest::Test

  def setup()
    @card1 = Card.new("ace", 1)
    @card2 = Card.new("hearts", 4)
    @card3 = Card.new("clubs", 2)
  end

  def test_can_ace_return_true()
    assert_equal(true, CardGame.checkforAce(@card1))
  end

end
