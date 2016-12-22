# Copyright (c) 2016-2017 Minqi Pan
# 
# This file is part of Enclose.IO, distributed under the MIT License
# For full terms see the included LICENSE file

class OmniauthController < Devise::OmniauthCallbacksController
  def github
    @user = User.from_omniauth(request.env['omniauth.auth'])
    raise @user.errors.full_messages unless @user.persisted?
    sign_in_and_redirect @user, :event => :authentication
  end
end
