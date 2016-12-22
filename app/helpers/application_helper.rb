# Copyright (c) 2016-2017 Enclose.IO contributors
# 
# This file is part of Enclose.IO, distributed under the MIT License
# For full terms see the included LICENSE file

module ApplicationHelper
  def file_item(x)
    case x.kind
    when 'win64'
      '<i class="fa fa-windows" aria-hidden="true"></i>'
    when 'linux64'
      '<i class="fa fa-linux" aria-hidden="true"></i>'
    when 'mac64'
      '<i class="fa fa-apple" aria-hidden="true"></i>'
    end.html_safe + ' ' + x.filename
  end
  
  def phase_name(phase)
    case phase
    when 'pending'
      'Pending...'
    when 'doing'
      'Compiling...'
    end
  end
end
