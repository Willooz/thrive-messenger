class MessagesController < ApplicationController

  def index
    @messages = Message.all
    # @messages = []
    # messages.each do |msg|
    #   @messages << {
    #     id: msg.id,
    #     author: "Flo",
    #     text: msg.text,
    #     time: msg.date,
    #     delivery: msg.delivery
    #   }
    # end
  end

end
