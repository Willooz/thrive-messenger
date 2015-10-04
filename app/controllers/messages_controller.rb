class MessagesController < ApplicationController

  def index
    @messages = {
      user: current_user,
      team: 'Team Yolo',
      messages: Message.all
    }
  end

  def create
    @message = Message.new(
      user: current_user,
      text: message_params[:text],
      date: Time.now,
      delivery: true
    )

    if @message.save
      render json: @message
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @message = Message.find(params[:id])
    @message.destroy
    head :no_content
  end

  private

  def message_params
    params.require(:message).permit(:id, :author, :text)
  end

end
