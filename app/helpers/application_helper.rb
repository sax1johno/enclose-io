module ApplicationHelper
  def title
    return @title if @title
    'Enclose.IO: Compiling your application into a single executable'
  end
end
