class MessagesController < ApplicationController

  def index
    messages = Message.includes(:user).map { |msg| message_data(msg) }
    @chat = {
      user: { id: available_user.id, author: available_user.username },
      team: 'Team Yolo',
      messages: messages
    }
  end

  def create
    message = Message.new(
      user: User.find(message_params[:user]),
      text: message_params[:text],
      date: Time.now,
      delivery: true
    )

    if message.save
      render json: message_data(message)
    else
      render json: message.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @message = Message.find(params[:id])
    @message.destroy
    head :no_content
  end

  private

  def message_params
    params.require(:message).permit(:id, :user, :text)
  end

  def available_user
    current_user ||= User.first
  end

  def message_data(message)
    {
      id: message.id,
      author: message.user.username,
      text: message.text,
      time: message.created_at,
      delivery: message.delivery
    }
  end

end
