require 'rails_helper'
#1
describe Message do
  describe'#create' do
    context 'messageを保存できる場合'do
      it 'contentがあれば保存できること'do
      expect(build(:message, image: nil)).to be_valid
  end
      it 'imageがあれば保存できること'do
      expect(build(:message,content: nil)).to be_valid
  end
      it 'contentとimageがあれば保存できること'do
      expect(build(:message)).to be_valid
end
end
    context 'messageを保存できない場合'do
      it 'ccintentも画像もないと保存できない'do
      message = build(:message, content: nil,image: nil)
      message.valid?
      expect(message.errors[:content]).to include("を入力してください")
end
      it 'group_idがないと保存できないこと'do
      message = build(:message,group_id: nil)
      message.valid?
      expect(message.errors[:group]).to include("を入力してください")
end
      it 'use_idがないと保存できないこと'do
      message = build(:message,user_id: nil)
      message.valid?
      expect(message.errors[:user]).to include("を入力してください")
end
end
end
end