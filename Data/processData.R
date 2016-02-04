# General Data Processing Script
  # data.wide : the data in the form returned by mTurk
  # variableList : vector of strings correponding to the variable names wanted
  # idVarList : default is c("workerid", "condition").
  # numTrials : number of trials each participant sees
  # numSS : number of subjects / participants
  # numberLogicalVector : vector of the same length as variableList that has "True" 
  #                       if that variable is to be force-cast as a numeric.

processData <- function(data.wide, variableList, idVarList = c("workerid", "condition"), 
                        numTrials, numSS, numberLogicalVector) {
  if(missing(numSS)) { numSS = nrow(data.wide) }
  if(missing(numberLogicalVector)) { numberLogicalVector = !logical(length=length(variableList))}
  
  require(reshape2)  
  # Converting to long format
  # Specify id.vars: the variables to keep but not split apart on
  data.long <- melt(data.wide, id.vars=idVarList,
                 variable.name="question",
                 value.name="value")
  
  valueColNum = length(idVarList) + 2
  data.semi <- data.frame(workerid=rep(data.wide$workerid, numTrials) ) 
  
  emoList <- c("happy", "sad", "anger", "surprise", "disgust", "fear", "content", "disapp")#, "sympath", "jealous")
  
  for(j in 1:numTrials) { # Going down the trials
    
    start = (j-1)*numSS+1
    end = (j)*numSS
    for(k in 1:length(idVarList)) {
      idVarToUse = idVarList[k]
      if(idVarToUse != "condition") {
        eval(parse(text=
                     paste(
                       "data.semi$", idVarToUse, "[", toString(start), ":", toString(end), "]=data.wide$", idVarToUse,
                       sep = "")
        ))
      }
    }
    
    data.semi$workerid[start:end] <- data.wide[1:numSS,1]
    
    for(k in 1:length(variableList)) {
      variableToUse = variableList[k]
      if(variableToUse %in% emoList) {
        emoVal = which(emoList==variableToUse)
        eval(parse(text=
                     paste(  variableToUse, ' <- data.long[data.long$question=="q', 
                              toString(emoVal), ".", toString(j), '",', toString(valueColNum), "]",
                              sep = "") 
        ))
      } else {
        eval(parse(text=
                     paste(  variableToUse, ' <- data.long[data.long$question=="', 
                             variableToUse, ".", toString(j), '",', toString(valueColNum), "]",
                             sep = "") 
        ))
      }
      
      
      if(numberLogicalVector[k]) {
        eval(parse( text=paste( paste( variableToUse, variableToUse, sep = "= as.numeric("), ")", sep = "")))
      }
      
      eval(parse( text=
                    paste("data.semi$", variableToUse, "[", 
                          toString(start), ":", toString(end), "] <- ", variableToUse,
                      sep = "")
      ))
      
    } # end of k in variableList loop
  } # end of j in numTrials loop
  return(data.semi)
}

processData2 <- function(data.wide, variableList, idVarList = c("workerid", "condition"), 
                        numTrials, numSS, numberLogicalVector) {
  if(missing(numSS)) { numSS = nrow(data.wide) }
  if(missing(numberLogicalVector)) { numberLogicalVector = !logical(length=length(variableList))}
  
  require(reshape2)  
  # Converting to long format
  # Specify id.vars: the variables to keep but not split apart on
  data.long <- melt(data.wide, id.vars=idVarList,
               variable.name="question",
               value.name="value")
  
  valueColNum = length(idVarList) + 2
  data.semi <- data.frame(workerid=rep(data.wide$workerid, numTrials) ) 
  
  emoList <- c("happy", "sad", "anger", "surprise", "disgust", "fear", "content", "disapp")#, "sympath", "jealous")
  
  for(j in 1:numTrials) { # Going down the trials
    
    start = (j-1)*numSS+1
    end = (j)*numSS
    for(k in 1:length(idVarList)) {
      idVarToUse = idVarList[k]
      if(idVarToUse != "condition") {
        eval(parse( text=paste(
          "data.semi$", idVarToUse, 
          "[", toString(start), ":", toString(end), "]=data.wide$", idVarToUse,
          sep = "")
        ))
      }
    }
    
    data.semi$workerid[start:end] <- data.wide[1:numSS,1]
    
    for(k in 1:length(variableList)) {
      variableToUse = variableList[k]
        eval(parse(text=paste(  
          variableToUse, ' <- data.long[data.long$question=="', 
          variableToUse, ".", toString(j), '",', toString(valueColNum), "]",
          sep = "") 
        ))
      
      if(numberLogicalVector[k]) {
        eval(parse( text=paste( paste( variableToUse, variableToUse, sep = "= as.numeric("), ")", sep = "")))
      }
      
      eval(parse( text=
                    paste( "data.semi$", variableToUse, "[", 
                           toString(start), ":", toString(end), "] <- ",  variableToUse,
                           sep = "")
      ))
      
    } # end of k in variableList loop
  } # end of j in numTrials loop
  return(data.semi)
}